$(document).ready(function(){
	// Trainers Resume Gallery
			var delay = 800;

			$('.column a.link-disabled').click(function(evt){
				evt.preventDefault();
			});//end click
			
			$('.column').hover(				
				function(){					
					$(this).find('div.top .img-top').click(function(){
						var $this = $(this);
						$this.parent().siblings('div').find('div.resume-top').addClass('resume-top-1');
						$this.parent().siblings('div').find('div.img-bottom').addClass('img-bottom-1')
						$('.resume-top-1').stop().slideDown(delay);
						$('.img-bottom-1').slideUp(delay);
					});//end click						
				},//end mouseover
				function(){	
					var $this = $(this);				
					$('.resume-top-1').stop().slideUp(delay);
					$('.img-bottom-1').slideDown(delay);
					$this.find('div.resume-top').removeClass('resume-top-1');
					$this.find('div.img-bottom').removeClass('img-bottom-1');
				}//end mouseout
			);//end hover

			$('.column').hover(
				function(){
					$(this).find('.bottom .img-bottom').click(function(){
						var $this = $(this);
						$this.parent().siblings('div').find('.img-bottom').addClass('top-img-bottom');
						$this.parent().siblings('div').find('.img-top').addClass('top-img-top');
						$this.parent().find('.resume-bottom').addClass('bottom-resume-bottom');
						$this.parent().find('.img-bottom').addClass('bottom-img-bottom');
						$('.top-img-bottom').stop().slideDown(delay);
						$('.top-img-top').slideUp(delay);
						$('.bottom-resume-bottom').stop().slideDown(delay);
						$('.bottom-img-bottom').slideUp(delay);
					});//end click
				},//end mouseover
				function(){
					var $this = $(this);
					$('.top-img-top').stop().slideDown(delay);
					$('.top-img-bottom').slideUp(delay);
					$('.bottom-resume-bottom').stop().slideUp(delay);
					$('.bottom-img-bottom').slideDown(delay);
					$this.find('.top .img-bottom').removeClass('top-img-bottom');
					$this.find('.top .img-top').removeClass('top-img-top');
					$this.find('.bottom .resume-bottom').removeClass('bottom-resume-bottom');
					$this.find('.bottom .img-bottom').removeClass('bottom-img-bottom');
				}//end mouseout
			);//end hover
			// Trainers Resume Gallery end.

	//Section3 GALLERY MODAL CODE:
	//  when hover image - transparent picture must fade in, When image clicked - the modal must appear with the bigger image then the first thumbnail and h5, p content
	$('div.container-thumb').hover(
		function(){
			var imagePath = $(this).find('img.thumb').attr('src').slice(4);
			var largeImagePath = 'img/large-'+ imagePath;
			var modalContent = $(this).siblings().html();
			$(this).find('.img-zoom').fadeIn(600);
			$('#galleryModal img').attr('src', largeImagePath );
			$('#galleryModal div.modal-footer').html(modalContent);
			
		},
		function(){
			$(this).find('.img-zoom').fadeOut(600);
		}
	);//end hover
	// END GALLERY

	// Section4 Price Plan:
	$('div.inner-block').hover(
		function(){
			$(this).css({
				backgroundColor: '#e14f4f',
				border: '2px solid #fff'
			});
			$(this).find('a.btn').css({
				backgroundColor: '#fff',
				color: '#e14f4f'
			});
		},
		function(){
			$(this).css({
				backgroundColor: '#d14343',
				border: 'none'
			});
			$(this).find('a.btn').css({
				backgroundColor: '#e14f4f',
				color: '#fff'
			});
		}
	);//end hover

	/* SCROLL-TO-TOP PAGE ARROW: ----------------------------------------------------------
		 firstly, shall define the current window scroll position with method .scrollTop() then,
		 when the arrow shall appear visible - fadeIn/fadeOut after  scrolling down of 500px , with the delay of 300ms */
		var scrolDown_px = 500;
			var delayShow_ms = 300;
			$(window).scroll(function(){
				if ($(this).scrollTop() > scrolDown_px) {
					$('.back-to-top').fadeIn(delayShow_ms);
				}else{
					$('.back-to-top').fadeOut(delayShow_ms);
				}
			});//end scroll
			/*second, shal make click-event returning back to the 
		top of the window with jquery function .animate()*/
		$('.back-to-top a').click(function(event){
			event.preventDefault();
			$('html, body').animate(
				{scrollTop:0},
				delayShow_ms
				);
			return false;
		});//end click

		$('[data-toggle="tooltip"]').tooltip();
/*-----------------------------------------------------------------------------------------*/
});// end ready