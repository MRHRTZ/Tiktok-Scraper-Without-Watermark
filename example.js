const tiktok = require('.')
const url = 'https://www.tiktok.com/@ads.who/video/7152104100639870234'
const slider_url = 'https://www.tiktok.com/@asupan.apa/video/7317560590459882757?q=story%20list&t=1707308579374'

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