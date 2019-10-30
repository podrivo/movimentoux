// Episodes interaction
if ('IntersectionObserver' in window && season && mqSmall) {
  body.classList.add('ioapi')

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      section = entry.target
      if (entry.intersectionRatio >= 0.5) {
        section.classList.toggle('-active')
      } else {
        section.classList.remove('-active')
      }
    })
  }, {
    threshold: [0.3, 0.7]
  })

  var sectionsArr = Array.from(document.querySelectorAll('.intro-section'))

  sectionsArr.forEach(function (section) {
    observer.observe(section)
  })
}
