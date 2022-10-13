const tiktok = require('.')
const url = 'https://www.tiktok.com/@ads.who/video/7152104100639870234?is_from_webapp=1&sender_device=pc'

tiktok.tiktokdownload(url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))
