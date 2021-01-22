$(function(){
	//yzm
	$('#getyzm').click(function(){
		var formid = $(this).attr("data");
		var Myphone=$('#tel').val();
		if(Myphone==''){   //验证手机号是否为空
			alert('请填写手机号');
			return false;
			}
		var reg=/^0?1[3456789]\d{9}$/; //手机号正则
		if(!reg.test(Myphone)){   //验证手机号是否正确
			alert('请填写正确的手机号！');
			return false;
			}
		$('#getyzm').hide();
		$('#daojishi').show();
		$.getJSON("http://www.yixue99.com/index.php?m=formguide&c=index&a=formyzm&formid="+formid+"&mobile="+Myphone+"&siteid=1&callback=?",function(json){
			if(json.status==1){
				alert('正在发送验证码');
				
			//倒计时
				runcount(60);
			}else if(json.status==2){
				alert('该手机号已接收过验证码 请不要重新提交！');
				$('#getyzm').show(0);
				$('#daojishi').hide(0);
				return false;
			}
				
			})
		});
		
})
//倒计时函数
function runcount(t){
	
 if(t>0){
	 document.getElementById('daojishi').innerHTML=t+'S后重新获取';
	 t--;
	 setTimeout(function(){
		 runcount(t)
		 },1000)
	 }else{
		 $('#getyzm').show();
		 $('#daojishi').hide();
		 }
 }