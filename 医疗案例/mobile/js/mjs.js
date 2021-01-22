$(function(){
//µØÖ·ÇÐ»»Ä£¿é

//³éÖí
$('.q1_close').click(function(){
	$('.aa').hide();
})
$(function(){
	$('.aa').hide();
	xx = Math.ceil(Math.random()*7);
//	var r1=randNum(),r2=randNum();
	$('.qiuqian').click(function(){
		$('.qiuqian').css("animation","qiuqian 1s")
		setTimeout(function(){
		$('.aa').hide();
		$('.aa').eq(xx).show()
		setTimeout(function(){
			$('.qq_bg1').css("opacity","1");
			$('.qq_bg2').css("opacity","1");
			$('.qq_bg3').css("opacity","1");
		},500)
		},1500)
		
		setTimeout(function(){
			$('.qiuqian').css("animation","")
		},2000)
	})
//	while(r2==r1){ r2=randNum()}
//	
//	$('div').eq(r1).show();
//	$('div').eq(r2).show();

})

})