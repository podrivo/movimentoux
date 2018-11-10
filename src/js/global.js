var viewport = window.innerHeight

var introTitle = document.querySelector('#title')
var introSocial = document.querySelector('.social')
var introSocialBottom = introSocial.offsetTop + introSocial.offsetHeight

function sticky(){
  var scroll = window.scrollY

  var introTitleBottom = introTitle.offsetTop + introTitle.offsetHeight
  var scrollBottom = (scroll + viewport) - (viewport - introSocialBottom)

  if (scrollBottom > introTitleBottom) {
    introSocial.classList.add('sticky')
  } else {
    introSocial.classList.remove('sticky')
  }
}

['scroll', 'load'].forEach(function(evt) {
  document.addEventListener(evt, sticky, false)
})
