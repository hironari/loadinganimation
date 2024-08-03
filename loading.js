window.onload = function() {
  // ID 'loading' の要素に対してクラスを追加
  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    loadingElement.classList.add('loaded');
  }

  // クラス 'spinner' の要素に対してクラスを追加
  const spinnerElements = document.getElementsByClassName('spinner');
  for (let i = 0; i < spinnerElements.length; i++) {
    // アニメーションの終了を待ってからクラスを追加
    setTimeout(() => {
      spinnerElements[i].classList.add('loaded_spinner');
    }, 1000); // アニメーションの時間に合わせて調整
  }

  // クラス 'logotype' の要素に対してクラスを追加
  const logotypeElements = document.getElementsByClassName('logotype');
  for (let i = 0; i < logotypeElements.length; i++) {
    // アニメーションの終了を待ってからクラスを追加
    setTimeout(() => {
      logotypeElements[i].classList.add('loaded_spinner');
    }, 1000); // アニメーションの時間に合わせて調整
  }
}