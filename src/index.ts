import { chromium, Page } from 'playwright';
import { InstagramMedia } from './interfaces/instagram';
import { isUrlValidInstagram } from './helpers/urlValidate';

export async function instaDl(url: string): Promise<string[]> {
	if (!isUrlValidInstagram(url)) throw new Error('Invalid URL');

	const browser = await chromium.launch();
	const context = await browser.newContext();
	const page = await context.newPage();

	return new Promise(async (resolve) => {
		findMediaUrl(page).then(async (videoUrl) => {
			await context.close();
			await browser.close();

			resolve(videoUrl);
		});

		await page.goto(url);
	});
}

function findMediaUrl(page: Page): Promise<string[]> {
	return new Promise((resolve, reject) => {
		page.route('**/*', async (route) => {
			const type = route.request().resourceType();
			const url = route.request().url();

			if (url.includes('graphql')) {
				route
					.request()
					.response()
					.then(async (response) => {
						const data = (await response?.json()) as InstagramMedia;
						const mediaUrls = getMediaFromGraphql(data);

						resolve(mediaUrls);
					});
			}

			const blockedTypes = [
				'image',
				'font',
				'texttrack',
				'object',
				'beacon',
				'csp_report',
				'imageset',
				'ping',
				'stylesheet',
			];

			if (blockedTypes.includes(type)) {
				route.abort();
				return;
			}

			route.continue();
		});
	});
}

function getMediaFromGraphql(data: InstagramMedia): string[] {
	const shortcodeMedia = data?.data?.xdt_shortcode_media;
	if (!shortcodeMedia) throw new Error('Video not found');

	const videoUrl = shortcodeMedia?.video_url;
	if (videoUrl) {
		return [videoUrl];
	}

	if ('edge_sidecar_to_children' in shortcodeMedia) {
		const mediaUrls = getMediaUrlsSideCar(data);

		if (mediaUrls) {
			return mediaUrls;
		}
	}

	throw new Error('Video not found');
}

function getMediaUrlsSideCar(data: InstagramMedia): string[] {
	const sidecar = data?.data?.xdt_shortcode_media?.edge_sidecar_to_children;
	const mediaUrl = sidecar?.edges
		?.map(({ node }) => {
			const video = node?.video_url;
			const image = node?.display_url;

			return video || image;
		})
		.filter((url) => url) as string[];

	return mediaUrl;
}
