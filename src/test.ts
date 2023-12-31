import { instaDl } from ".";
import { writeFile } from "node:fs/promises";

(async () => {
	const urlDownload = await instaDl('https://www.instagram.com/p/C0-fN1dLPNi/');
	console.log(urlDownload);

	const response = await fetch(urlDownload.urls[0]);
	const arrayBuffer = await response.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);
	
	writeFile('video.mp4', buffer);
})();