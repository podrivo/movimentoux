var viewport = window.innerHeight

var introTitle = document.querySelector('#title')
var introSocial = document.querySelector('.social')
var introSocialBottom = introSocial.offsetTop + introSocial.offsetHeight

function stickySocial(){
  var scroll = window.scrollY

  var introTitleBottom = introTitle.offsetTop + introTitle.offsetHeight
  var scrollBottom = (scroll + viewport) - (viewport - introSocialBottom)

  if (scrollBottom > introTitleBottom) {
    introSocial.classList.add('sticky')
  } else {
    introSocial.classList.remove('sticky')
  }
}

['scroll', 'touchstart', 'load', 'resize'].forEach(function(event) {
  document.addEventListener(event, stickySocial, false)
})
