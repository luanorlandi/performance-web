var jarodei = false;

window.onscroll = function() {
  if (jarodei) return;
  jarodei =true;
  setTimeout(function(){
    jarodei = false;
  }, 100);

  var imgs = document.querySelectorAll('img[data-src]');
  for (var i = 0; i < imgs.length; i++) {
    if (imgs[i].getBoundingClientRect().top < window.innerHeight + 200) {
      imgs[i].src = imgs[i].getAttribute('data-src');
    }
  }
};
