$(document).ready(function() {

 	$('.portfolio img').click(function(){
 			console.log('hello world');
 			var url= $(this).attr('data');
 			console.log(url);
 		/*	var titre=$(this).children('h2').text();*/

 		/*if ($(this).attr('class') == 'scroll') {

 			$('#popup div').css('overflow-y','scroll');
 	};*/
 		/*	console.log(titre);*/

 		/*	$('#top-nav').fadeOut();*/
 		/*	$('#popup h1').empty();*/
 		/*	$('#popup h1').prepend(titre);*/
 			$('#popup div img').attr('src',url);



 			$('body').addClass('blocker');
 		/*	$('#section2').after('<div class="blocker"></div>');

			$('#section2').before('<div class="blocker"></div>');*/
			$('#popup').css("display","block");




 	});

document.addEventListener('keydown', function(e) {

	if (e.keyCode==27) {
			$('#popup').css("display","none");

			$('#popup div').css('overflow-y','visible');
			$('body').removeClass('blocker');
		 	$('#popup div img').remove();
			$('#popup div').append("<img src=\"\" alt=\"zoom\"/>");

	};

});

	$("#popup").click(function thumb(event){
var target = $(event.target );

		if (target.is("#popup div img")){
				window.open($("#popup div img").attr('src'));
			return false;
		}

else{
			$('#popup').css("display","none");
			$('#popup div').css('overflow-y','visible');
			$('body').removeClass('blocker');
 			$('#popup div img').remove();
 			$('#popup div').append("<img src=\"\" alt=\"zoom\"/>");
		}

	});




});
