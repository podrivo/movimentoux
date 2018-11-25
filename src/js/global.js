// // barba.js configs
// // document.addEventListener('DOMContentLoaded', function() {
// //   var Transition = Barba.BaseTransition.extend({
// //     start: function() {
// //       // this.newContainerLoading.then(this.heyholetsgo.bind(this))
// //       console.log('start')
// //
// //       Promise
// //         .all([this.newContainerLoading, this.fadeOut()])
// //         .then(this.heyholetsgo.bind(this));
// //     },
// //
// //     fadeOut: function() {
// //       /*** this.oldContainer is the HTMLElement of the old Container*/
// //       return this.oldContainer.classList.add('teste')
// //     },
// //
// //     heyholetsgo: function() {
// //       this.done()
// //       console.log('heyholetsgo')
// //     }
// //   })
// //
// //   Barba.Pjax.start()
// //   Barba.Pjax.getTransition = function() {
// //     return Transition
// //   }
// // })
//
//










// // SoundCloud API
// // SC.initialize({
// //   client_id: 'y1nMl2njKSB6eNKPiU4jTxp9lNt2LE8d'
// // })
// var scPlayer = new SoundCloudAudio('y1nMl2njKSB6eNKPiU4jTxp9lNt2LE8d')
// // scPlayer.duration
// // scPlayer.play({streamUrl: 'https://api.soundcloud.com/tracks/335540254/stream'})
// // scPlayer.on('timeupdate', function () {
// //   console.log(scPlayer.audio.duration, scPlayer.audio.currentTime);
// // })
// // console.log(scPlayer.duration);
//
//
//
//
//
// // var audio = new Audio()
//
// function get(url, callback) {
//   var request = new XMLHttpRequest()
//   request.onreadystatechange = function() {
//     if (request.readyState === 4 && request.status === 200) {
//       callback(request.responseText)
//     }
//     if (request.status === 403) { // forbidden
//       console.log('música bloqueada')
//     }
//   }
//   request.open('GET', url, true)
//   request.send(null)
// }
//
// function soundCloudUrl(inputUrl) {
//   var clientId = 'client_id=y1nMl2njKSB6eNKPiU4jTxp9lNt2LE8d'
//   var apiUrl = 'https://api.soundcloud.com/resolve.json?url=' + inputUrl + '&' + clientId
//
//   get(apiUrl, function(response) {
//     var trackInfo = JSON.parse(response)
//     var streamUrl = trackInfo.stream_url + '?' + clientId
//     audio.src = streamUrl
//   })
// }
//
//
// // https://codepen.io/AliKlein/pen/MBNBEW
// function $(id) {return document.getElementById(id);}
// // var media = document.getElementById('audio')
// var media = new Audio()
//
// var ui = {
//   play: 'playAudio',
//   audio: media,
//   percentage: 'percentage',
//   seekObj: 'seekObj',
//   currentTime: 'currentTime'
// }
//
//
// function togglePlay() {
//   if (media.paused === false) {
//     media.pause()
//     $(ui.play).classList.remove('pause')
//   } else {
//     media.play()
//     $(ui.play).classList.add('pause')
//   }
// }
//
// function calculatePercentPlayed() {
//   var percentage = (media.currentTime / media.duration).toFixed(2) * 100
//   $(ui.percentage).style.width = percentage + '%'
// }
//
// function calculateCurrentValue(currentTime) {
//   var currentMinute = parseInt(currentTime / 60) % 60
//   var currentSecondsLong = currentTime % 60
//   var currentSeconds = currentSecondsLong.toFixed()
//   var currentTimeFormatted = (currentMinute < 10 ? '0' + currentMinute : currentMinute) + ':' + (
//   currentSeconds < 10 ? '0' + currentSeconds : currentSeconds)
//
//
//   return currentTimeFormatted;
// }
//
// function initProgressBar() {
//   var currentTime = calculateCurrentValue(media.currentTime)
//   $(ui.currentTime).innerHTML = currentTime
//   $(ui.seekObj).addEventListener('click', seek)
//
//   media.onended = function () {
//     $(ui.play).classList.remove('pause')
//     $(ui.percentage).style.width = 0
//     $(ui.currentTime).innerHTML = '00:00'
//   };
//
//   function seek(e) {
//     var percent = e.offsetX / this.offsetWidth
//     media.currentTime = percent * media.duration
//   }
//
//   calculatePercentPlayed()
// }
//
// $(ui.play).addEventListener('click', togglePlay)
// $(ui.audio).addEventListener('timeupdate', initProgressBar)

// $(function(){
//   document.body.getAttribute('data-page') == 'pagetype'
//   if($('body').is('.PageType')){
//     //add dynamic script tag  using createElement()
//     // OR
//     //call specific functions
//   }
// });

var body = document.body

if(body.getAttribute('data-page') == 'episode'){
  var soundcloud = new SoundCloudAudio('y1nMl2njKSB6eNKPiU4jTxp9lNt2LE8d')
  var audio = soundcloud.audio
  var player = document.querySelector('.episode-player')
  var timeCurrent = document.querySelector('.-current')
  var timeDuration = document.querySelector('.-duration')
  var timeline = document.querySelector('.timeline')
  var percentage = document.querySelector('.percentage')
  var percentageMouse = document.querySelector('.mouse')
  var volume = document.querySelector('.volume')
  var backwards = document.querySelector('.backwards')
  var forwards = document.querySelector('.forwards')

  function formatTime(timeCurrent) {
    var seconds = parseInt(timeCurrent % 60)
    var minutes = parseInt((timeCurrent / 60) % 60)
    var hours = parseInt((timeCurrent / 3600) % 60)

    var format = (hours <= 0 ? '' : hours + ':') + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)

    return format
  }

  soundcloud.resolve('https://soundcloud.com/movimento-ux/andredoamaral', function(track) {
    timeDuration.innerHTML = formatTime(soundcloud.duration)
    soundcloud.play()
    soundcloud.pause()
  })

  soundcloud.on('timeupdate', function() {
    var timelinePercentage = (audio.currentTime * 100 / audio.duration).toFixed(2)
    percentage.style.width = timelinePercentage + '%'
    timeCurrent.innerHTML = formatTime(audio.currentTime)

    timeline.addEventListener('click', function(e){
      var percent = e.offsetX / this.offsetWidth
      audio.currentTime = percent * audio.duration
    })
  })


  var playButton = document.querySelector('.episode-player > .play')
  playButton.addEventListener('click', function(){
    if (soundcloud.playing) {
      soundcloud.pause()
      this.classList.remove('-on')
    } else {
      soundcloud.play()
      this.classList.add('-on')
    }
  })

  timeline.addEventListener('mousemove', function(event){
    var hoverPercentage = (event.offsetX * 100 / this.offsetWidth).toFixed(2)
    percentageMouse.style.width = hoverPercentage + '%'
    percentageMouse.style.opacity = '1'
  })


  timeline.addEventListener('mouseleave', function(event){
    setTimeout(function(){
      percentageMouse.style.opacity = '0'
    })
  })

  volume.addEventListener('click', function(event){
    if (this.classList.contains('-off')){
      soundcloud.setVolume(1)
      this.classList.remove('-off')
    } else {
      soundcloud.setVolume(0)
      this.classList.add('-off')
    }
  })

  forwards.addEventListener('click', function(event){
    audio.currentTime = audio.currentTime + 15
  })

  backwards.addEventListener('click', function(event){
    audio.currentTime = audio.currentTime - 15
  })
}




//menu mobile
var menuDesktop = document.querySelector('.menu.-desktop')
var linkMobile = document.querySelector('.link.-mobile')

linkMobile.addEventListener('click', function(e){
  e.preventDefault()
  if (menuDesktop.classList.contains('-mobile-active')) {
    menuDesktop.classList.remove('-mobile-active')
    this.innerHTML = 'Menu'
  } else {
    menuDesktop.classList.add('-mobile-active')
    this.innerHTML = 'Fechar'
  }
})
