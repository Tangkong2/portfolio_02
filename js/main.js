$(function () { //삭제x

  $(window).resize(function () { document.location.reload(); })

  var pages = ['01. 매일 묻고 답하다', '02. 함께 나누는 매일', '03. 매일 이야기'];

  var mv = new Swiper(".mv", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 3500,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        var pageText = pages[index];
        var isMobile = window.innerWidth <= 1024;
        console.log(".isMobile:", isMobile);

        if (isMobile) {
          pageText = pageText.split('.')[0];
        }
        console.log("페이지네이션 텍스트:", pageText);
        return '<span class="' + className + '">' + pageText + '</span>';
      }
    }
  });




  // 제품소개영역-left
  const product_left = new Swiper(".product_left", {
    direction: "vertical",
    navigation: {
      nextEl: ".prd_next",
      prevEl: ".prd_prev",
    },
    slidesPerView: '7',
  });

  $(".product_left ul li").click(function () {
    let num = $(this).index();
    product_right.slideTo(num, 300, {
      noSwiping: true
    });
    $(".product_left ul .swiper-slide-active").removeClass("active");
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });


  //제품 list영역-right
  const product_right = new Swiper(".product_right", {
    slidesPerView: '1.5',
    slideToClickedSlide: true,
    initialSlide: 0,
    spaceBetween: 14,
    /* centeredSlides: true, */
    breakpoints: {
      768: { // 768px 이상에서
        slidesPerView: 2.3,
      },
      1024: { // 1200px 이상에서
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      1300: { // 1300px 이상에서
        slidesPerView: 3,
      },
      1700: { // 170 이상에서
        slidesPerView: 3.7,
      },
    },
  });

  // JavaScript
  const leftList = document.querySelectorAll('.product_left .swiper-slide');
  const swiperContainer = document.querySelector('.swiper-container');
  let mySwiper;

  // 스와이퍼 초기화
  mySwiper = new Swiper('.swiper-container', {
    initialSlide: 0, // 첫 번째 슬라이드 활성화
    pagination: {
      el: '.swiper-pagination',
    },
  });

  leftList.forEach((item, index) => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      const slide = swiperContainer.querySelector(`.swiper-slide[data-id="${id}"]`);
      if (slide) {
        mySwiper.slideTo(index);
      }
    });
  });


  /* brand_list */
  // const brand_list = new Swiper(".brand_list", {
  //   slidesPerView: 2,
  //   autoplay: false,
  //   autoplay: {
  //     disableOnInteraction: true,
  //     centeredSlides: false,
  //     loop: false,
  //   },
  //   breakpoints: {
  //     768: {
  //       autoplay: false,
  //       slidesPerView: 2,
  //     },
  //     1024: {
  //       autoplay: false,
  //       slidesPerView: 4,
  //       spaceBetween: 18,
  //     },
  //   },
  // });



}); //삭제x