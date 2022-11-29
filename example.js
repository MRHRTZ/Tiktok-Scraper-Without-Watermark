const tiktok = require('.')
const url = 'https://www.tiktok.com/@ads.who/video/7152104100639870234'

// tiktok.tiktokdownload(url)
//      .then(result => {
//           console.log(result)
//      })
//      .catch(e => console.log(e))

tiktok.tiklydown(url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))