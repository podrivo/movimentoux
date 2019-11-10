// Player + SoundCloud
if (episode) {
  var KEY = 'AdBAY9M0wHTRovngU9Ht4Z63XezL9saK'
  var soundcloud = new SoundCloudAudio(KEY)
  var audio = soundcloud.audio
  var player = document.querySelector('.episode-player')
  var timeCurrent = document.querySelector('.episode-player .-current')
  var timeDuration = document.querySelector('.episode-player .-duration')
  var playButton = document.querySelector('.episode-player .play')
  var timeline = document.querySelector('.episode-player .timeline')
  var percentage = document.querySelector('.episode-player .percentage')
  var percentageMouse = document.querySelector('.episode-player .mouse')
  var volume = document.querySelector('.episode-player .volume')
  var backwards = document.querySelector('.episode-player .backwards')
  var forwards = document.querySelector('.episode-player .forwards')
  var downloadLink = document.querySelector('.download')

  var attrData = player.getAttribute('data-soundcloud')
  var storageTime = localStorage.getItem(attrData)
  var url = 'https://soundcloud.com/movimento-ux/' + attrData


  function formatTime(timeCurrent) {
    var seconds = parseInt(timeCurrent % 60)
    var minutes = parseInt((timeCurrent / 60) % 60)
    var hours = parseInt((timeCurrent / 3600) % 60)

    var format = (hours <= 0 ? '' : hours + ':') + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)

    return format
  }


  if (storageTime) {
    audio.currentTime = storageTime
  } else {
    localStorage.setItem(attrData, audio.currentTime)
  }


  soundcloud.resolve(url, function(track) {
    timeCurrent.innerHTML = formatTime(audio.currentTime)
    timeDuration.innerHTML = formatTime(soundcloud.duration)
    soundcloud.play()

    var playPromise = soundcloud.play()
    if (playPromise !== undefined) {
      playPromise.then(function() {
        soundcloud.pause()
      }).catch(function(error){
        console.log(error)
      })
    }
    downloadLink.href = track.download_url + '?client_id=' + KEY

    var timelinePercentage = (audio.currentTime * 100 / soundcloud.duration).toFixed(2)
    percentage.style.width = timelinePercentage + '%'
  })


  soundcloud.on('timeupdate', function() {
    var timelinePercentage = (audio.currentTime * 100 / audio.duration).toFixed(2)
    percentage.style.width = timelinePercentage + '%'

    timeCurrent.innerHTML = formatTime(audio.currentTime)
    localStorage.setItem(attrData, audio.currentTime)

    timeline.addEventListener('click', function(e) {
      var percent = e.offsetX / this.offsetWidth
      audio.currentTime = percent * audio.duration
    })
  })


  playButton.addEventListener('click', function() {
    if (soundcloud.playing) {
      soundcloud.pause()
      this.classList.remove('-on')
    } else {
      soundcloud.play()
      this.classList.add('-on')
    }
  })


  timeline.addEventListener('mousemove', function(event) {
    var hoverPercentage = (event.offsetX * 100 / this.offsetWidth).toFixed(2)
    percentageMouse.style.width = hoverPercentage + '%'
    percentageMouse.style.opacity = '1'
  })

  timeline.addEventListener('mouseleave', function() {
    setTimeout(function () {
      percentageMouse.style.opacity = '0'
    })
  })

  volume.addEventListener('click', function() {
    if (this.classList.contains('-off')) {
      soundcloud.setVolume(1)
      this.classList.remove('-off')
    } else {
      soundcloud.setVolume(0)
      this.classList.add('-off')
    }
  })

  forwards.addEventListener('click', function() {
    audio.currentTime = audio.currentTime + 15
  })

  backwards.addEventListener('click', function() {
    audio.currentTime = audio.currentTime - 15
  })
}
