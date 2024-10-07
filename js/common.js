$(function () { //삭제x

  /* header고정 */
  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 500) {
      $("#header, .depth2").addClass("fix");
    } else {
      $("#header, .depth2").removeClass("fix");
    }
  });

  /* depth2 */
  $(".header_main nav .gnb > li").mouseenter(function () {
    $(this).find(".depth2").stop().fadeIn(300);
  });
  $(".header_main nav .gnb > li").mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut(300);
  });


  /* lang */
  $(".lang p, .lang p::before").hide();
  $(".lang").mouseenter(function () {
    $(".lang p, .lang p::before").fadeIn(300);
  });
  $(".lang").mouseleave(function () {
    $(".lang p, .lang p::before").fadeOut(300);
  });


  /* ham_menu */
  $(".mdepth2").hide();
  $(".mgnb > li").click(function () {
    $(this).find(".mdepth2").fadeIn(1000);
    $(this).siblings().find(".mdepth2").hide(0);
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  $(".ham_menu").click(function () {
    $(".ham_bg, .ham_con").fadeIn(500);
    $('html, body').addClass('hidden');
  });
  $(".ham_close").click(function () {
    $(".ham_bg, .ham_con").fadeOut(500);
    $('html, body').removeClass('hidden');
  });


  /* family */
  $(".family_click h3").click(function () {
    var $list = $(".family_list");
    var $click = $(this);
    if ($list.is(":visible")) {
      $list.slideUp(1000);
      $click.css("background", "#fff url(../img/main/family_bar.png) no-repeat right 30px center");
    } else {
      $list.slideDown(1000);
      $click.css("background", "#fff url('../img/main/family_close_bar.png') no-repeat right 30px center");
    }
  });


  /* 모바일 sub_menu_list */
  $(".btn_on button").click(function () {
    var $list = $(".sub_m_list ul");
    var $button = $(this);
    if ($list.is(":visible")) {
      $list.slideUp(1000);
      $button.css("background", "url('../img/sub/sub_m_list_button_on.png') no-repeat center");
    } else {
      $list.slideDown(1000);
      $button.css("background", "url('../img/sub/sub_m_list_button_off.png') no-repeat center");
    }
  });


  /* go_top버튼 */
  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 500) {
      $(".go_top a").addClass("fix");
    } else {
      $(".go_top a").removeClass("fix");
    }
  });


}); //삭제x