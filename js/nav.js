	
	
	$(window).scroll(function(e){
 
		console.log("scroll")
	  if( $(this).scrollTop() < SCROLL_HEAD_SIZE) {
		  $('.bcmc-header').removeClass('fixed');
	  } else {
		  $('.bcmc-header').addClass('fixed');
	  }
  
  });
  $('.navbar-toggler').click(()=>{
	$('.bcmc-header').addClass('fixed');
  });