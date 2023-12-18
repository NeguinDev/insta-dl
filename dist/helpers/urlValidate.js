"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrlValidInstagram = void 0;
function isUrlValidInstagram(url) {
    try {
        const urlObj = new URL(url);
        const hostsValid = ['instagram.com', 'www.instagram.com'];
        const isHostValid = hostsValid.includes(urlObj.host);
        return isHostValid;
    }
    catch (error) {
        return false;
    }
}
exports.isUrlValidInstagram = isUrlValidInstagram;
//# sourceMappingURL=urlValidate.js.map