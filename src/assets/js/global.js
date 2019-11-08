var body = document.body
var html = document.body.parentNode

var episode = html.getAttribute('data-page') === 'episode'
var season = html.getAttribute('data-page') === 'season'
var mqSmall = window.matchMedia('(min-width: 768px)').matches


var introHeader = document.querySelectorAll('.intro-section .header')
introHeader.forEach(function(header){
  // console.log(header);
  // var introHeaderTextContent = header.textContent
  var introHeaderInnerHTML = header.innerHTML.replace(/<span[^>]*>[^>]*<\/span>/g, '')
  // console.log(introHeaderInnerHTML);
  var introText = introHeaderInnerHTML.split(' ')
  // console.log(introText);
  var introTextFiltered = introText.filter(function(el) {return el != ''})
  // console.log(introTextFiltered);
  var introTextLast = introTextFiltered.pop()
  // console.log(introTextLast);
  var introTextFirst = introTextFiltered.join(' ')
  
  var spanFirst = '<span>' + introTextFirst + '</span>'
  var spanLast = '<span>' + introTextLast + '</span>'
  
  header.innerHTML = spanFirst + spanLast
})
