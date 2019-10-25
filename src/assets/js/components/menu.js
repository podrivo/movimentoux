//menu mobile
var menuDesktop = document.querySelector('.menu.-desktop')
var linkMobile = document.querySelector('.link.-mobile')

linkMobile.addEventListener('click', function (e) {
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
if (!season) {
  var header = document.querySelector('header')
  var headerHeight = header.offsetHeight
  var sidebarInfo = document.querySelector('.sidebar .info')
  var supporter = document.querySelector('.supporter')

  var headroom = new Headroom(header, {
    offset: 80,
    tolerance: 40,
    onPin: function () {
      if (episode && supporter && mqSmall) {
        supporter.style.transform = 'translateY(' + header.offsetHeight + 'px)'
        sidebarInfo.style.marginBottom = '-' + header.offsetHeight + 'px'
      }
    },
    onUnpin: function () {
      if (episode && supporter && mqSmall) {
        supporter.style.transform = 'translateY(0)'
        sidebarInfo.style.marginBottom = '0'
      }
    },
    onTop: function () {
      if (episode && supporter) {
        supporter.style.transform = 'translateY(0)'
        sidebarInfo.style.marginBottom = '0'
      }
    },
    onBottom: function () {
      if (episode && supporter) {
        supporter.style.transform = 'translateY(0)'
        sidebarInfo.style.marginBottom = '0'
      }
    }
  })
  headroom.init()
}