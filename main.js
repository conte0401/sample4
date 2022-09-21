$(function () {
    const ham = $('#js-hamburger');
    const nav = $('#js-nav');
    ham.on('click', function () { //ハンバーガーメニューをクリックしたら
      ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
      nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
    });
});
  
$(function () {
    $('#js-nav a[href]').on('click', function (event) {
      $('#js-hamburger').trigger('click');
    });
});

$(function () {
  $('#js-slider').slick({
    arrows: true, // 前・次のボタンを表示する
    dots: true, // ドットナビゲーションを表示する
    appendDots: $('.dots-2'), // ドットナビゲーションの生成位置を変更
    speed: 1000, // スライドさせるスピード（ミリ秒）
    slidesToShow: 1, // 表示させるスライド数
    centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
    variableWidth: true, // スライド幅の自動計算を無効化
  });
});

$(function () {
  ScrollReveal().reveal('.fadeIn', {
    delay: 300, // アニメーション開始までの時間
    duration: 1600, // アニメーション完了にかかる時間
    origin: 'bottom', // 要素がどの方向から来るか
    distance: '50px', // 移動する距離
    reset: true // フレームインの度に動かすか
  });
});