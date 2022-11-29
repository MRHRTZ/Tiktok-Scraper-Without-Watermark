const tiktok = require('.')
const url = 'https://www.tiktok.com/@ads.who/video/7152104100639870234'
const slider_url = 'https://vt.tiktok.com/ZS8e1HeEs/'

tiktok.tiklydown(url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))

tiktok.dlpanda(slider_url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))