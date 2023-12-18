# insta-dl

## Overview
`insta-dl` is a tool for downloading media from Instagram. It uses Playwright to interact with Instagram pages and extract media URLs.

## Features
- Validates Instagram URLs.
- Downloads media (images and videos) from Instagram posts.
- Handles different types of Instagram media, including sidecar posts.

## Installation
```bash
npm install insta-dl
```

## Usage
To download media from an Instagram URL, use the `instaDl` function. This function takes an Instagram URL as input and returns an array of media URLs.

Example:
```javascript
const { instaDownload } = require('insta-dl');

(async () => {
    const mediaUrls = await instaDownload('https://www.instagram.com/p/C0-fN1dLPNi/');
    console.log(mediaUrls);
})();
```

Output:
```json
[
    "https://scontent.cdninstagram.com/v/t50.2886-16/411871655_6943863569015015_2167177240664383492_n.mp4?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=CEO103UVEfEAX_axHSD&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBP_Z24NC2U_2z2BBBhfoBp0AGPrqZyXITd_ZvRnmOiGQ&oe=6581A508&_nc_sid=10d13b"
]
```
