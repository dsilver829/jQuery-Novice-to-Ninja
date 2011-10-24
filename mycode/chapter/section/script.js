$(document).ready(function(){
	$('#photos_inner').click(function() {
		var scrollAmount = $(this).width() - $(this).parent().width();
		var currentPos = Math.abs(parseInt($(this).css('left')));
		var remainingScroll = scrollAmount - currentPos;

		// Scroll half-a-screen by default
		var nextScroll = Math.floor($(this).parent().width() / 2);

		// But if there isn't a FULL scroll left,
		// then only scroll the remaining amount.
		if (remainingScroll < nextScroll) {
			nextScroll = remainingScroll;
		}

		if (currentPos < scrollAmount) {
			// Scroll left
			$(this).animate({'left':'-=' + nextScroll}, 'slow');
		}
		else {
			// Scroll right
			$(this).animate({'left':'0'}, 'fast');
		}

	});
});
