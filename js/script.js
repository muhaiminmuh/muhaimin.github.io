$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul')
	$('.pKanan').addClass('pMuncul')
});



$(window).scroll(function() { 
	var wScroll = $(this).scrollTop();


// Services //

	if( wScroll > $('.services').offset().top - 300) {
		$('.services .card-panel').each(function(i) {
			setTimeout(function(){
				$('.services .card-panel').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}

// Image //

	if( wScroll > $('.clients').offset().top - 330) {
		$('.clients .thumbnail').each(function(i) {
			setTimeout(function(){
				$('.clients .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}



});