$(function(){
    $('.main_li_a').hover(function(){
        $('.main_ul li .down_menu').removeClass('show_down_menu');
        $(this).next('.down_menu').addClass('show_down_menu')
    });
    $('.back_img').hover(function(){
        $('.main_ul li .down_menu').removeClass('show_down_menu');
    });
   
/**************  start items ************** */
//start menu
$('.items .menu ul li a').on('click',function(){
     $(this).addClass('active_item_link').parent('li').siblings().children('a').removeClass('active_item_link');
    $('.items .content > div').css('display','none')
    $($(this).data('items')).fadeIn(500)
})
//end menu

//start heart
  $('.description .heart i').on('click',function(){
      $(this).addClass('show_heart').siblings().removeClass('show_heart')
  });
//end heart
/**************  end items ************** */



/****** start slider */
$('.carousel').carousel({
    interval: 200000
  })
/***** end slider */
})