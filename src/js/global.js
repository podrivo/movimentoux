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

if (body.getAttribute('data-page') === 'episode') {
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

  var url = 'https://soundcloud.com/movimento-ux/' + player.getAttribute('data-soundcloud')
  soundcloud.resolve(url, function(track) {
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





//header after scrolling
var header = document.querySelector('header')
document.addEventListener('scroll', function(){
  if (window.scrollY >= 100){
    header.classList.add('-scrolled')
  } else {
    header.classList.remove('-scrolled')
  }
})






// list-grid
if (body.getAttribute('data-page') === 'season') {
  var list = document.querySelector('.list')
  var grid = document.querySelector('.grid')
  var wrapper = document.querySelector('.episode-wrapper')
  //
  // var group = document.querySelector(".episode-wrapper");
  // var nodes = document.querySelectorAll(".intro-episode");
  // var total = nodes.length;
  // var ease  = Power1.easeInOut;
  // var boxes = [];

  // for (var i = 0; i < total; i++) {
  //
  //   var node = nodes[i]
  //   var width = node.offsetWidth;
  //   var height = node.offsetHeight;
  //
  //   var content = node.cloneNode(true);
  //   console.log(content);
  //   content.classList.add("item-content");
  //
  //   // Initialize transforms on node
  //   // TweenLite.set(node, { x: 0 });
  //   TweenLite.set(node, { x: 0 });
  //   TweenLite.set(content, { width: width, height: height });
  //   // TweenLite.set([node, node.children], { backgroundColor: color, color: color }); //?
  //
  //   node.appendChild(content);
  //
  //   boxes[i] = {
  //     content: content,
  //     transform: node._gsTransform,
  //     x: node.offsetLeft,
  //     y: node.offsetTop,
  //     width: node.offsetWidth,
  //     height: node.offsetHeight,
  //     node: node
  //   };
  // };



  list.addEventListener('click', function(){
    if (!this.classList.contains('-on')) {
      wrapper.classList.remove('-grid')
      list.classList.toggle('-on')
      grid.classList.toggle('-on')
    }
    layout()
  })

  grid.addEventListener('click', function(){
    if (!this.classList.contains('-on')) {
      wrapper.classList.add('-grid')
      list.classList.toggle('-on')
      grid.classList.toggle('-on')
    }
    layout()
  })

  // var content = node.cloneNode(true);
  // content.classList.add("item-content");

  // function layout() {
  //
  //   // group.classList.toggle("reorder");
  //
  //   for (var i = 0; i < total; i++) {
  //
  //     var box = boxes[i]
  //
  //     var lastX = box.x
  //     var lastY = box.y
  //
  //     var lastW = box.width;
  //     var lastH = box.height;
  //
  //     box.x = box.node.offsetLeft
  //     box.y = box.node.offsetTop
  //
  //     var width  = box.width  = box.node.offsetWidth;
  //     var height = box.height = box.node.offsetHeight;
  //
  //     // Continue if box hasn't moved
  //     if (lastX === box.x && lastY === box.y) {
  //       // Reversed delta values taking into account current transforms
  //       var x = box.transform.x + lastX - box.x
  //       var y = box.transform.y + lastY - box.y
  //
  //       // Tween to 0 to remove the transforms
  //       // TweenLite.fromTo(box.node, 2.5, {x: x, y: y}, {x: 0, y: 0, ease: ease})
  //       TweenLite.set(box.node, { x: x, y: y });
  //       TweenLite.to(box.node, time, { x: 0, y: 0, ease: ease });
  //     }
  //
  //     if (lastW !== box.width || lastH !== box.height) {
  //       TweenLite.to(box.content, 2.5, {autoRound: false, width: width, height: height, ease: ease})
  //     }
  //   }
  // }




  //
  // ANIMATIONS
  // ===========================================================================
  // var inputs = document.querySelectorAll("input");
  var episodes = document.querySelectorAll('.intro-episode')
  var total = episodes.length
  var dirty = true
  var time = 0.9
  var omega = 12
  var zeta = 0.9
  var boxes = []

  for (var i = 0; i < total; i++) {

    var ep = episodes[i]
    var width = ep.offsetWidth
    var height = ep.offsetHeight
    // var color = "transparent";

    // Need another element to animate width & height... use clone instead of editing HTML
    var clone = ep.cloneNode(true)
    ep.classList.add('-hide')
    clone.classList.add('-clone')

    TweenLite.set(ep, {x: "+=0", y: '+=0'})
    TweenLite.set(clone, {width: width, height: height})
    // TweenLite.set([node, node.children], { backgroundColor: color, color: color });

    ep.appendChild(clone)

    // console.log(node)

    var transform = ep._gsTransform
    var x = ep.offsetLeft
    var y = ep.offsetTop

    boxes[i] = {clone: clone, height: height, ep: ep, transform: transform, width: width, x: x, y: y}
  }

  // for (var i = 0; i < inputs.length; i++) {
  //   inputs[i].addEventListener("change", layout);
  // }

  window.addEventListener('resize', function () {dirty = true})
  TweenLite.ticker.addEventListener('tick', function () {return dirty && layout()})

  layout()

  function layout() {

    // dirty = false;

    for (var i = 0; i < total; i++) {

      var box = boxes[i]

      var lastX = box.x
      var lastY = box.y
      var lastW = box.width
      var lastH = box.height

      var width = box.width = box.ep.offsetWidth
      var height = box.height = box.ep.offsetHeight

      box.x = box.ep.offsetLeft
      box.y = box.ep.offsetTop

      if (lastX !== box.x || lastY !== box.y) {

        var x = box.transform.x + lastX - box.x
        var y = box.transform.y + lastY - box.y

        // Tween to 0 to remove the transforms
        // TweenLite.set(box.node, {x: x, y: y})
        TweenLite.to(box.ep, time, {x: 0, y: 0, ease: ease})
      }

      if (lastW !== box.width || lastH !== box.height) {
        TweenLite.to(box.clone, time, {autoRound: false, width: width, height: height, ease: ease})
      }
    }
  }

  function ease(progress) {
    var beta = Math.sqrt(1.0 - zeta * zeta)
    progress = 1 - Math.cos(progress * Math.PI / 2)
    progress = 1 / beta * Math.exp(-zeta * omega * progress) * Math.sin(beta * omega * progress + Math.atan(beta / zeta))

    return 1 - progress
  }
}










var carousel = document.querySelector('.carousel')
var flkty = new Flickity(carousel, {
  // cellAlign: 'left',
  // contain: true
  autoPlay: true,
  pageDots: false
})
