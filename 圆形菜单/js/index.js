$(".menu").mousedown(function(){
	$(this).toggleClass("closed");
	
	if($(this).hasClass("closed")) {
		$(".main1.button").text("Menu");
	} else {
		$(".main1.button").text("Close");
	}
})