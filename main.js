let scale = 1;


const herzVideo = document.querySelector('.video-herz');
const donerVideo = document.querySelector('.video-doner');

$('.first-view').on('click', function () {
  $('.first-view').addClass('first-view--off');

 
  const video = $('.video-herz')[0];
  video.currentTime = 0;
  video.play();

   const audio = document.querySelector('.bg-audio');
  audio.volume = 0;
  audio.play();

  let v = 0;
  const fade = setInterval(() => {
    v += 0.002;
    audio.volume = Math.min(v, 0.4);
    if (v >= 0.4) clearInterval(fade);
  }, 100);
});

$('.agree-btn').on('click', function () {
  $('.video').removeClass('video--active');
  $('.video-doner').addClass('video--active')[0].play();
  donerVideo.addEventListener('ended', () => {
    if (window.opener) {
      window.close();
    } else {

      window.location.href = 'about:blank';
    }
  }, { once: true });
});


$('.disagree-btn').on('click', function () {
  scale += 0.5;
  $('.agree-btn').css('transform', `scale(${scale})`);
});

