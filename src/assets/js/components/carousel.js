// flickity carousel
var carousel = document.querySelector('.episode-carousel')
if (carousel) {
  new Flickity(carousel, {
    autoPlay: true,
    pageDots: false,
    imagesLoaded: true
  })
}