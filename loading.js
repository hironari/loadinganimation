window.onload = function() {
  // ID 'loading' の要素に対してクラスを追加
  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    loadingElement.classList.add('loaded');
  }

  // クラス 'spinner' の要素に対してクラスを追加
  const spinnerElements = document.getElementsByClassName('spinner');
  for (let i = 0; i < spinnerElements.length; i++) {
    spinnerElements[i].classList.add('loaded_spinner');
  }

  // クラス 'logotype' の要素に対してクラスを追加
  const logotypeElements = document.getElementsByClassName('logotype');
  for (let i = 0; i < logotypeElements.length; i++) {
    logotypeElements[i].classList.add('loaded_spinner');
  }
}