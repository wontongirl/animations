$(function(){
	//yzm
	$('#getyzm').click(function(){
		var formid = $(this).attr("data");
		var Myphone=$('#tel').val();
		if(Myphone==''){   //��֤�ֻ����Ƿ�Ϊ��
			alert('����д�ֻ���');
			return false;
			}
		var reg=/^0?1[3456789]\d{9}$/; //�ֻ�������
		if(!reg.test(Myphone)){   //��֤�ֻ����Ƿ���ȷ
			alert('����д��ȷ���ֻ��ţ�');
			return false;
			}
		$('#getyzm').hide();
		$('#daojishi').show();
		$.getJSON("http://www.yixue99.com/index.php?m=formguide&c=index&a=formyzm&formid="+formid+"&mobile="+Myphone+"&siteid=1&callback=?",function(json){
			if(json.status==1){
				alert('���ڷ�����֤��');
				
			//����ʱ
				runcount(60);
			}else if(json.status==2){
				alert('���ֻ����ѽ��չ���֤�� �벻Ҫ�����ύ��');
				$('#getyzm').show(0);
				$('#daojishi').hide(0);
				return false;
			}
				
			})
		});
		
})
//����ʱ����
function runcount(t){
	
 if(t>0){
	 document.getElementById('daojishi').innerHTML=t+'S�����»�ȡ';
	 t--;
	 setTimeout(function(){
		 runcount(t)
		 },1000)
	 }else{
		 $('#getyzm').show();
		 $('#daojishi').hide();
		 }
 }