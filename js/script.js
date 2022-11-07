/* section1 슬라이드 */
$(document).ready(function() {
    slide();
  });
  
  
// 슬라이드 
function slide() {
  let wid = 0;
  let now_num = 0;
  let slide_length = 0;
  let auto = null;
  let dotLi = $('.dot>li');
  let imgWrap = $('.img_wrap');
  let imgWrapImg = imgWrap.children('img');

  // 변수 초기화
  function init() {
    wid = $('.img_wrap').width();
    now_num = $('.dot>li.on').index();
    slide_length = dotLi.length;
  }

  // 이벤트 묶음
  function slideEvent() {

    // 슬라이드 하단 dot버튼 클릭했을때
    dotLi.click(function() {
      now_num = $(this).index();
      slideMove();
    });

  

    // 오토플레이
    autoPlay();

    // 오토플레이 멈춤
    autoPlayStop();

    // 오토플레이 재시작
    autoPlayRestart();

    // 화면크기 재설정 되었을때
    resize();
  }

  // 자동실행 함수
  function autoPlay() {
    auto = setInterval(function() {
      nextChkPlay();
    }, 3000);
  }

  // 자동실행 멈춤
  function autoPlayStop() {
      imgWrapImg.mouseenter(function() {
      clearInterval(auto);
    });
  }


  // 자동실행 멈췄다가 재실행
  function autoPlayRestart() {
      imgWrapImg.mouseleave(function() {
      auto = setInterval(function() {
        nextChkPlay();
      }, 3000);
    });
  }

  // 이전 버튼 클릭시 조건 검사후 슬라이드 무브
  function prevChkPlay() {
    if (now_num == 0) {
      now_num = slide_length - 1;
    } else {
      now_num--;
    }
    slideMove();
  }

  // 이후 버튼 클릭시 조건 검사후 슬라이드 무브
  function nextChkPlay() {
    if (now_num == slide_length - 1) {
      now_num = 0;
    } else {
      now_num++;
    }
    slideMove();
  }

  // 슬라이드 무브
  function slideMove() {
      imgWrap.stop().animate({
      'margin-left': -wid * now_num
    });
    dotLi.removeClass('on');
    dotLi.eq(now_num).addClass('on');
  }

  // 화면크기 조정시 화면 재설정
  function resize() {
    $(window).resize(function() {
      init();
      imgWrap.css({
        'margin-left': -wid * now_num
      });
    });
  }
  init();
  slideEvent();
} 


/* section4 슬라이드 */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  }
});

setTimeout(function(load){
  loading = $('#loading');
  loading.fadeOut();
}, 2100)

setTimeout(function(){
  show = $('#wrap');
  show.fadeIn();
}, 2200)


  // 로딩 바
function tag () {
  let progress = document.querySelector('.progressTag')
  let interval = 1
  let updatesPerSecond = 1000 / 60
  let end = progress.max * 1.0

  function animator () {
    progress.value = progress.value + interval
    if ( progress.value + interval < end){
      setTimeout(animator, updatesPerSecond);
    } else { 
      progress.value = end
    }
  }

  setTimeout(() => {
    animator()
  }, updatesPerSecond)
}

tag()