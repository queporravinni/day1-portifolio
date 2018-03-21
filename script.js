  		$(function(){
  			var aName = 'animated shake';
  			var aEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  			$('img.perfil').on('click',function(){
  				$(this).addClass('animated shake');
  			});
  		}); 