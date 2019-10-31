// tabs
window.addEventListener('load', function () {
  var myTabs = document.querySelectorAll('.episode-tabs .link')
  var myContentPanes = document.querySelectorAll('.tab')
  var hash = location.hash.replace('#', '')

  if (hash != '') {
    for (var i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove('on')
      myContentPanes[i].classList.remove('on')

      if (hash === myTabs[i].getAttribute('href').replace('#', '')) {
        myTabs[i].classList.add('on')
        myContentPanes[i].classList.add('on')
      }
    }
  }

  function myTabClicks(tabClickEvent) {
    for (var i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove('on')
    }

    var clickedTab = tabClickEvent.currentTarget
    clickedTab.classList.add('on')
    tabClickEvent.preventDefault()

    for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove('on')
    }

    var anchorReference = tabClickEvent.target
    var activePaneId = anchorReference.getAttribute('href')
    var activePane = document.querySelector(activePaneId)
    activePane.classList.add('on')
    history.pushState(null, null, anchorReference.getAttribute('href'))
  }

  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener('click', myTabClicks)
  }
})