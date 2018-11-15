var bodyIntro = document.body.classList.contains('body-intro')

// Sticky social links
if (bodyIntro) {
  var viewport = window.innerHeight
  var introTitle = document.querySelector('#title')
  var introSocial = document.querySelector('#social')
  var introSocialBottom = introSocial.offsetTop + introSocial.offsetHeight
}

function stickySocial(){
  if (bodyIntro) {
    var scroll = window.scrollY

    var introTitleBottom = introTitle.offsetTop + introTitle.offsetHeight
    var scrollBottom = (scroll + viewport) - (viewport - introSocialBottom)

    if (scrollBottom > introTitleBottom) {
      introSocial.classList.add('sticky')
    } else {
      introSocial.classList.remove('sticky')
    }
  }
}

['scroll', 'touchstart', 'load', 'resize'].forEach(function(event) {
  document.addEventListener(event, stickySocial, false)
})



// barba.js configs
document.addEventListener('DOMContentLoaded', function() {
  var Transition = Barba.BaseTransition.extend({
    start: function() {
      // this.newContainerLoading.then(this.heyholetsgo.bind(this))
      // document.querySelector('#title').classList.add('teste')
      // document.querySelector('#title').classList.add('teste')
      console.log('start')

      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.heyholetsgo.bind(this));
    },

    fadeOut: function() {
      /**
       * this.oldContainer is the HTMLElement of the old Container
       */

      return this.oldContainer.classList.add('teste')
    },

    heyholetsgo: function() {
      this.done()
      console.log('heyholetsgo')
    }
  })

  Barba.Pjax.start()
  Barba.Pjax.getTransition = function() {
    return Transition
  }
})
