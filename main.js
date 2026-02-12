let scale = 1;


const herzVideo = document.querySelector('.video-herz');
const donerVideo = document.querySelector('.video-doner');

herzVideo.play().catch(() => {
  console.log('Автоплей заблокирован браузером');
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
