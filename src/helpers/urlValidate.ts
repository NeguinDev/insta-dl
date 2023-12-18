export function isUrlValidInstagram(url: string): boolean {
	try {
		const urlObj = new URL(url);

		const hostsValid = ['instagram.com', 'www.instagram.com'];
		const isHostValid = hostsValid.includes(urlObj.host);

		return isHostValid;
	} catch (error) {
		return false;
	}
}