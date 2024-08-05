window.onload = function() {

  setTimeout(() => {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
      loadingElement.classList.add('loaded');
    }
  }, 2000); // 2000ミリ秒（2秒）遅延


  // クラス 'spinner' の要素に対してクラスを追加
  const spinnerElement = document.querySelector('.spinner');
  spinnerElement.addEventListener('animationend', () => {
    spinnerElement.classList.add('loaded_spinner');
  });

  // クラス 'logotype' の要素に対してクラスを追加
  const logotypeElements = document.getElementsByClassName('logotype');
  for (let i = 0; i < logotypeElements.length; i++) {
    logotypeElements[i].addEventListener('animationend', () => {
      logotypeElements[i].classList.add('loaded_spinner');
    });
  }
}