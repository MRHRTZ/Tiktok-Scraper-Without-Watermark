<p align="center">
<img src="https://raw.githubusercontent.com/MRHRTZ/Tiktok-Scraper-Without-Watermark/main/src/media/ttk.webp" width="128" height="128"/>
</p>
<p align="center">
<a href="#"><img title="Tiktok-Scraper-Without-Watermark" src="https://img.shields.io/static/v1?label=package&message=Tiktok-Scraper-Without-Watermark&color=lightred"></a>
</p>
<p align="center">
<a href="https://github.com/MRHRTZ"><img title="Author" src="https://img.shields.io/badge/Author-MRHRTZ-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/MRHRTZ/Tiktok-Scraper-Without-Watermark/network/members"><img title="Forks" src="https://img.shields.io/github/forks/MRHRTZ/Tiktok-Scraper-Without-Watermark?color=red&style=flat-square"></a>
<a href="https://github.com/MRHRTZ/Tiktok-Scraper-Without-Watermark/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/MRHRTZ/Tiktok-Scraper-Without-Watermark?label=Watchers&color=blue&style=flat-square"></a>
<a href="https://github.com/MRHRTZ/Tiktok-Scraper-Without-Watermark"><img title="Followers" src="https://img.shields.io/github/followers/MRHRTZ?color=blue&style=flat-square"></a>
<a href="https://github.com/MRHRTZ/Tiktok-Scraper-Without-Watermark/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/MRHRTZ/Tiktok-Scraper-Without-Watermark?color=red&style=flat-square"></a>
</p>

# Tiktok-Scraper-Without-Watermark

## Required
- Nodejs ( <a href="https://nodejs.org/en/download">download here</a> )

## Install it

``` npm i tiktok-scraper-without-watermark ```

## Usage

```
const tiktok = require('tiktok-scraper-without-watermark')
const url = 'https://www.tiktok.com/@youneszarou/video/6942436555692805381'


tiktok.tiktokdownload(url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))
```
