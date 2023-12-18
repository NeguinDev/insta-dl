"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const promises_1 = require("node:fs/promises");
(async () => {
    const urlDownload = await (0, _1.instaDl)('https://www.instagram.com/p/C0-fN1dLPNi/');
    console.log(urlDownload);
    const response = await fetch(urlDownload[0]);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    (0, promises_1.writeFile)('video.mp4', buffer);
})();
//# sourceMappingURL=test.js.map