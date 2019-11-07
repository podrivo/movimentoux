var body = document.body
var episode = body.getAttribute('data-page') === 'episode'
var season = body.getAttribute('data-page') === 'season'
var mqSmall = window.matchMedia('(min-width: 768px)').matches


// var introHeader = []
var introHeader = document.querySelector('.intro-section .header')
var introHeaderTextContent = introHeader.textContent
var introHeaderInnerHTML = introHeader.innerHTML
// console.log(introHeader);
var introText = introHeaderInnerHTML.split(' ')
// console.log(introText);
var introTextFiltered = introText.filter(function(el) {return el != ''})
// console.log(introTextFiltered);
var introTextLast = introTextFiltered.pop()
// console.log(introTextLast);
var introTextFirst = introTextFiltered.join(' ')

introHeader.innerHTML = introTextFirst + '<span>' + introTextLast + '</span>'; //join first part and last part and put the required html for the last word
console.log(introHeaderInnerHTML);



// $('h2.title').html(function () {
// introHeader.innerHTML(function() {
  // separate the text by spaces
// var introText = introHeader.join()
// var introText = introHeader.split(' ')
// console.log(introText, introText.clean(''));
  // drop the last word and store it in a variable
// var introTextLast = introText.pop()
  // join the text back and if it has more than 1 word add the span tag
  // to the last word
  // return text.join(" ") + (text.length > 0 ? ' <span class="last">' + last + '</span>' : last);
// })

// console.log(introHeader.innerHTML);
// console.log(introHeader.textContent);
// console.log(introText, introTextLast);
