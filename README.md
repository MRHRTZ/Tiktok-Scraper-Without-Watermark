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

## Installation

- git clone https://github.com/MRHRTZ/Tiktok-Scraper-Without-Watermark
- cd Tiktok-Scraper-Without-Watermark
- npm i
- node example.js

### Install for your project

- npm i https://github.com/MRHRTZ/Tiktok-Scraper-Without-Watermark

## Usage

```javascript
const tiktok = require("tiktok-scraper-without-watermark");
const url = "https://www.tiktok.com/@ads.who/video/7152104100639870234";
const slider_url = "https://vt.tiktok.com/ZS8e1HeEs/";

tiktok
  .tiklydown(url)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => console.log(e));

tiktok
  .dlpanda(slider_url)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => console.log(e));
```

## Response Example

### TiklyDown

```javascript
{
  id: 7152104100639870000,
  title: 'slow down tiger',
  created_at: '2022-10-08 18:36:46',
  stats: {
    commentCount: '12.6 K',
    shareCount: '27.8 K',
    playCount: '18.7 M',
    saveCount: '27.8 K'
  },
  video: {
    noWatermark: 'https://v16.tiktokcdn.com/16557c16049446db5cbd953baaf456cf/63860d88/video/tos/useast2a/tos-useast2a-pve-0037-aiso/94367a4561f1468e90e03d360ed671d3/?a=1180&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2818&bt=1409&cs=0&ds=6&ft=KLrRMzm8m6o0PDOcdEMaQ9j3QwS6JE.C0&mime_type=video_mp4&qs=0&rc=Ojk5Zzo6N2VmZzlkNDQ0NUBpM3M1bTw6ZjhwZzMzZjgzM0AzLi01YDUxNjAxMTIwNDFhYSMzYXIwcjRnLi1gLS1kL2Nzcw%3D%3D&l=20221129074740010223077169270CE688&btag=80000&cc=2',
    watermark: 'https://v16.tiktokcdn.com/d10bd9e77367537e37add8df1aee461c/63860d88/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/87b615d3cd234ca5ae7ebae99e3c9e1c/?a=1180&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2064&bt=1032&cs=0&ds=6&ft=KLrRMzm8m6o0PDOcdEMaQ9j3QwS6JE.C0&mime_type=video_mp4&qs=11&rc=OTc5ZTY0O2VkNGgzZzo1ZUBpM3M1bTw6ZjhwZzMzZjgzM0A0MF8vLjAyXi8xMjJeYjYwYSMzYXIwcjRnLi1gLS1kL2Nzcw%3D%3D&l=20221129074740010223077169270CE688&btag=80000&cc=2',
    cover: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/bf8174a76ef04c24a4f55654cbc7b2f2~noop.image?x-expires=1669791600&x-signature=dmddtVdnCcnUZO4UUIwmAodQp2c%3D&s=FEED&se=false&sh=&sc=cover&l=20221129074740010223077169270CE688',
    dynamic_cover: 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/31f59f043778417ea0c2b2c2892a178c_1665229008?x-expires=1669791600&x-signature=448D6ExkaDv4qVZFCtMVz1KxWc0%3D&s=FEED&se=false&sh=&sc=dynamic_cover&l=20221129074740010223077169270CE688',
    origin_cover: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/fa054bf0fcd44409a7f810cbee854228_1665229008~tplv-tiktokx-360p.webp?x-expires=1669791600&x-signature=S2xzyIMwP9i%2FL0AjHgKpi3Xc9wQ%3D&s=FEED&se=false&sh=&sc=feed_cover&l=20221129074740010223077169270CE688',
    width: 576,
    height: 1024,
    durationFormatted: '00:00:10',
    duration: 10,
    ratio: '540p'
  },
  music: {
    id: 7152104126350937000,
    title: 'original sound - ads.who',
    author: 'advertisement',
    cover_hd: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/beb1b3a7b0e17398b9c2cb6556f2ef7c~c5_1080x1080.webp?x-expires=1669791600&x-signature=YwY3THFHdgVgN1rBg9vp1463oxE%3D',
    cover_large: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/beb1b3a7b0e17398b9c2cb6556f2ef7c~c5_1080x1080.webp?x-expires=1669791600&x-signature=YwY3THFHdgVgN1rBg9vp1463oxE%3D',
    cover_medium: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/beb1b3a7b0e17398b9c2cb6556f2ef7c~c5_720x720.webp?x-expires=1669791600&x-signature=%2BslmkyJKFYlq8h303Q4A1Sa3iY4%3D',
    cover_thumb: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/beb1b3a7b0e17398b9c2cb6556f2ef7c~c5_100x100.webp?x-expires=1669791600&x-signature=%2Bw3ZrU%2BM70kXaz0Iml5yCXMSVTk%3D',
    durationFormatted: '00:00:10',
    duration: 10,
    play_url: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7152108529230547739.mp3'
  },
  author: {
    id: '6761375309470057474',
    name: 'advertisement',
    unique_id: 'ads.who',
    signature: '🏹 they/them | 24',
    avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/beb1b3a7b0e17398b9c2cb6556f2ef7c~c5_720x720.webp?x-expires=1669791600&x-signature=%2BslmkyJKFYlq8h303Q4A1Sa3iY4%3D',
    avatar_thumb: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/beb1b3a7b0e17398b9c2cb6556f2ef7c~c5_100x100.webp?x-expires=1669791600&x-signature=%2Bw3ZrU%2BM70kXaz0Iml5yCXMSVTk%3D'
  }
}
```

### DLPanda

```javascript
{
  video: '//v16m-default.akamaized.net/b6cc60fcaa6b456134515048d436ceac/65c3cc74/video/tos/useast2a/tos-useast2a-ve-0068c001/oYAYZNBBzXRSyE3BM0EPAqM7iQUsoDQjydiKI/?a=0&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=all&amp;cd=0%7C0%7C0%7C0&amp;cv=1&amp;br=1812&amp;bt=906&amp;bti=OHYpOTY0Zik3OjlmOm01MzE6ZDQ0MDo%3D&amp;cs=0&amp;ds=6&amp;ft=XE5bCqT0mmjPD125XGmR3wUgPIMtMeF~O5&amp;mime_type=video_mp4&amp;qs=0&amp;rc=Z2hnNTk3NDhlaGQ1Zjk7ZUBpM21rcXU5cjNtcDMzNzczM0AwYDUzMi1eXl8xMy9gMC9jYSMyYzYuMmQ0MTNgLS1kMTZzcw%3D%3D&amp;l=202402071230571E29CD87463423A9CB17&amp;btag=e00088000',
  audio: 'https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7316898531014118150.mp3'
}
```
