////////////////////////��ȡ����ʱ/////////////////////////
	//����ʱ
$(function (){
	
	function runCount(t){	
		if(t>0){
			document.getElementById('getmes1').value = t+'s';
			t--;
			setTimeout(function(){runCount(t);},1000)
		}else{
			$("#getmes1").hide();
			$("#getmes").show();
		}
	
	}
	
	$("#getmes").click(function(){
		var MobileVal = $("#tel").val();
		
		if(MobileVal==""){
			alert("���������ĵ绰����")
			return false;
		}
		var reg = /^0?1[34578]\d{9}$/; //�ֻ���
		if (!reg.test(MobileVal)){
			alert("������ĵ绰��������"); 
			return false;
		}
		var formid = 364;
		$.getJSON("http://www.yixue99.com/index.php?m=formguide&c=index&a=getsms&formid="+formid+"&mobile="+MobileVal+"&callback=?", function(json){
			if (json.status) {
				alert("���ڷ�����֤�룬���Ժ�");
				$("#getmes").hide();
				$("#getmes1").show();
				runCount(59);
			} else {
				alert(json.msg);
			}

		})
	})	

////////////////////////////////����ͷ��////////////////////////
	})
	$(function(){
		$("#dosubmit").click(function(event) {
			var info = {};
			info.name = $("#name").val();
			info.major = $("#major").val();
			info.tel = $("#tel").val();
			info.mess = $("#mess").val();
			if (!info.name) {
				alert('�������û���');
				return false;
			}
			var name_re = /^[\u4e00-\u9fa5]{0,}$/;
			if (!name_re.test(info.name)) {
				alert('����ӦΪ����');
				return false;
			}
			if (!info.major) {
				alert('��������ѧרҵ');
				return false;
			}
			if (!info.tel) {
				alert('�������ֻ���');
				return false;
			}
			var tel_re = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			if (!tel_re.test(info.tel)) {
				alert('�ֻ��Ÿ�ʽ����ȷ');
				return false;
			}
			if (!info.mess) {
				alert('�����������֤��');
				return false;
			}
			var getUrl = $("#myform").attr('action');
			$.ajax({
				url: getUrl,
				type: 'get',
				dataType: 'jsonp',
				data: {info: info, dosubmit:1},
				success:function(json){
					if (json == 1) {
						alert('ԤԼ�ɹ�');
						window.location.reload();
					} else if (json == 2) {
						alert('����ԤԼ�������ظ�ԤԼ');
					} else if (json == 4) {
						alert('�ֻ�������֤�����');
					}  else {
						alert('ԤԼʧ��');
					}
				}
			})
		});
	})