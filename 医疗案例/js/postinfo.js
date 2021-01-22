////////////////////////获取倒计时/////////////////////////
	//倒计时
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
			alert("请输入您的电话号码")
			return false;
		}
		var reg = /^0?1[34578]\d{9}$/; //手机号
		if (!reg.test(MobileVal)){
			alert("您输入的电话号码有误"); 
			return false;
		}
		var formid = 364;
		$.getJSON("http://www.yixue99.com/index.php?m=formguide&c=index&a=getsms&formid="+formid+"&mobile="+MobileVal+"&callback=?", function(json){
			if (json.status) {
				alert("正在发送验证码，请稍候。");
				$("#getmes").hide();
				$("#getmes1").show();
				runCount(59);
			} else {
				alert(json.msg);
			}

		})
	})	

////////////////////////////////返回头部////////////////////////
	})
	$(function(){
		$("#dosubmit").click(function(event) {
			var info = {};
			info.name = $("#name").val();
			info.major = $("#major").val();
			info.tel = $("#tel").val();
			info.mess = $("#mess").val();
			if (!info.name) {
				alert('请输入用户名');
				return false;
			}
			var name_re = /^[\u4e00-\u9fa5]{0,}$/;
			if (!name_re.test(info.name)) {
				alert('姓名应为汉字');
				return false;
			}
			if (!info.major) {
				alert('请输入所学专业');
				return false;
			}
			if (!info.tel) {
				alert('请输入手机号');
				return false;
			}
			var tel_re = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			if (!tel_re.test(info.tel)) {
				alert('手机号格式不正确');
				return false;
			}
			if (!info.mess) {
				alert('请输入短信验证码');
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
						alert('预约成功');
						window.location.reload();
					} else if (json == 2) {
						alert('您已预约，请勿重复预约');
					} else if (json == 4) {
						alert('手机短信验证码错误');
					}  else {
						alert('预约失败');
					}
				}
			})
		});
	})