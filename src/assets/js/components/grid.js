// list-grid
// if (season) {
//   var list = document.querySelector('.list')
//   var grid = document.querySelector('.grid')
//   var wrapper = document.querySelector('.episode-wrapper')

//   list.addEventListener('click', function(){
//     if (!this.classList.contains('-on')) {
//       wrapper.classList.remove('-grid')
//       list.classList.toggle('-on')
//       grid.classList.toggle('-on')
//     }
//     layout()
//   })

//   grid.addEventListener('click', function(){
//     if (!this.classList.contains('-on')) {
//       wrapper.classList.add('-grid')
//       list.classList.toggle('-on')
//       grid.classList.toggle('-on')
//     }
//     layout()
//   })

//   // Code from 'Animated Flexbox Playground' — https://codepen.io/osublake/pen/dMLQJr
//   // by Blake Bowen — https://codepen.io/osublake
//   window.addEventListener('resize', function() {dirty = true;})
//   TweenLite.ticker.addEventListener('tick', function() {return dirty && layout()})
//   layout()

//   var episodes = document.querySelectorAll('.intro-episode');
//   var episodesTotal = episodes.length
//   var dirty = true
//   var time = 2
//   var ease = Quint.easeInOut
//   var boxes = []

//   for (var i = 0; i < episodesTotal; i++) {

//     var ep = episodes[i]
//     var width = ep.offsetWidth
//     var height = ep.offsetHeight

//     var epClone = ep.cloneNode(true)
//     epClone.classList.add('-clone')

//     TweenLite.set(ep, {x: '+=0'})
//     TweenLite.set(epClone, {width: width, height: height})
//     TweenLite.set([ep, ep.children], {visibility: 'hidden'})
//     TweenLite.set([epClone, epClone.children], {visibility: 'visible'})

//     ep.appendChild(epClone)

//     var transform = ep._gsTransform
//     var x = ep.offsetLeft
//     var y = ep.offsetTop

//     boxes[i] = {
//       width: width,
//       height: height,
//       x: x,
//       y: y,
//       ep: ep,
//       epClone: epClone,
//       transform: transform
//     }
//   }

//   function layout() {

//     dirty = false

//     for (var i = 0; i < episodesTotal; i++) {

//       var box = boxes[i]

//       var lastX = box.x
//       var lastY = box.y

//       var lastW = box.width
//       var lastH = box.height

//       var width = box.width = box.ep.offsetWidth
//       var height = box.height = box.ep.offsetHeight

//       box.x = box.ep.offsetLeft
//       box.y = box.ep.offsetTop

//       if (lastX !== box.x || lastY !== box.y) {

//         var x = box.transform.x + lastX - box.x
//         var y = box.transform.y + lastY - box.y

//         TweenLite.set(box.ep, {x: x, y: y})
//         TweenLite.to(box.ep, time, {x: 0, y: 0, ease: ease})
//       }

//       if (lastW !== box.width || lastH !== box.height) {

//         TweenLite.to(box.epClone, time, {autoRound: false, width: width, height: height, ease: ease})
//       }
//     }
//   }
// }





















