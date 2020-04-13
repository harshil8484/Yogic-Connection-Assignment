/**
  *
 * Copyright 2020 Harshil Soni
 * Released on: April 13, 2020
 */  
   var mySwiper = new Swiper ('.swiper-container', {
       speed: 1000,
       slidesPerView: 5,
       allowTouchMove: false,
       direction: 'horizontal',
       loop: false,
       simulateTouch:true,
       
      navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
      
       scrollbar: {
         snapOnRelease:true,
      
         el: '.swiper-scrollbar ',
         draggable: true,
         dragSize: 14,     
       },
      });
      $(".category-link").click(function(){
	if($(this).hasClass("_open")){
		$(this).removeClass("_open");
		$(this).next().fadeOut();
		$(".navigation-box").removeClass("active");
		
	}
	else{
		$(".category-link").removeClass("_open");
		$(".sub-box").fadeOut();
		$(this).addClass("_open");
		$(".navigation-box").addClass("active");
		$(this).next().fadeIn();
	}
});
      $(".cart.icons,#close-cart,.bg").click(function(){
      	if($(".sidebar-cart").hasClass("_open")){
      		$(".bg").fadeOut();
      		$(".sidebar-cart").removeClass("_open");	
      	}
      	else{
      		$(".bg").fadeIn();
      		$(".sidebar-cart").addClass("_open");	
      	}
      	
      });
      $(window).scroll(function(){
      	$(".bg").fadeOut();
      		$(".sidebar-cart").removeClass("_open");
      });
      $("#open-search,.search-close").click(function(){
      		$(".search-box").toggleClass("open");
      });
      $(".swatches span").click(function(){
	var product_set = $(this).parent().attr("product-set");
	 var index = $(this).index();

	var image_set = "[image-set='"+product_set+"'] img";
	$(image_set).hide();
	$(image_set).eq(index).show();
});