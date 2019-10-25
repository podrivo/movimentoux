// flickity carousel
var carousel = document.querySelector('.carousel')
if (carousel) {
  new Flickity(carousel, {
    autoPlay: true,
    pageDots: false,
    imagesLoaded: true
  })
}