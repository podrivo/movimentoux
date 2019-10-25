// Player + SoundCloud
if (episode) {
  var KEY = 'AdBAY9M0wHTRovngU9Ht4Z63XezL9saK'
  var soundcloud = new SoundCloudAudio(KEY)
  var audio = soundcloud.audio
  var player = document.querySelector('.episode-player')
  var timeCurrent = document.querySelector('.-current')
  var timeDuration = document.querySelector('.-duration')
  var timeline = document.querySelector('.timeline')
  var percentage = document.querySelector('.percentage')
  var percentageMouse = document.querySelector('.mouse')
  var volume = document.querySelector('.volume')
  var backwards = document.querySelector('.backwards')
  var forwards = document.querySelector('.forwards')
  var downloadLink = document.querySelector('.download')

  function formatTime(timeCurrent) {
    var seconds = parseInt(timeCurrent % 60)
    var minutes = parseInt((timeCurrent / 60) % 60)
    var hours = parseInt((timeCurrent / 3600) % 60)

    var format = (hours <= 0 ? '' : hours + ':') + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)

    return format
  }

  var url = 'https://soundcloud.com/movimento-ux/' + player.getAttribute('data-soundcloud')
  soundcloud.resolve(url, function (track) {
    timeDuration.innerHTML = formatTime(soundcloud.duration)
    soundcloud.play()
    soundcloud.pause()
    downloadLink.href = track.download_url + '?client_id=' + KEY
  })

  soundcloud.on('timeupdate', function () {
    var timelinePercentage = (audio.currentTime * 100 / audio.duration).toFixed(2)
    percentage.style.width = timelinePercentage + '%'
    timeCurrent.innerHTML = formatTime(audio.currentTime)

    timeline.addEventListener('click', function (e) {
      var percent = e.offsetX / this.offsetWidth
      audio.currentTime = percent * audio.duration
    })
  })


  var playButton = document.querySelector('.episode-player > .play')
  playButton.addEventListener('click', function () {
    if (soundcloud.playing) {
      soundcloud.pause()
      this.classList.remove('-on')
    } else {
      soundcloud.play()
      this.classList.add('-on')
    }
  })

  timeline.addEventListener('mousemove', function (event) {
    var hoverPercentage = (event.offsetX * 100 / this.offsetWidth).toFixed(2)
    percentageMouse.style.width = hoverPercentage + '%'
    percentageMouse.style.opacity = '1'
  })


  timeline.addEventListener('mouseleave', function (event) {
    setTimeout(function () {
      percentageMouse.style.opacity = '0'
    })
  })

  volume.addEventListener('click', function (event) {
    if (this.classList.contains('-off')) {
      soundcloud.setVolume(1)
      this.classList.remove('-off')
    } else {
      soundcloud.setVolume(0)
      this.classList.add('-off')
    }
  })

  forwards.addEventListener('click', function (event) {
    audio.currentTime = audio.currentTime + 15
  })

  backwards.addEventListener('click', function (event) {
    audio.currentTime = audio.currentTime - 15
  })
}
