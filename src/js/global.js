// Sticky social links
['scroll', 'touchstart', 'load', 'resize'].forEach(function(event) {
  // var viewport = window.innerHeight
  // var introTitle = document.querySelector('#title')
  // var introSocial = document.querySelector('.social')
  // var introSocialBottom = introSocial.offsetTop + introSocial.offsetHeight
  // document.addEventListener(event, stickySocial, false)
})

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
