
var ref = new Wilddog("http://sc.chinaz.com/");
var words = ref.child("words");

$(document).ready(function () {
	
    var word; //�����洢������е�ֵ
    var arr = []; //�����洢Ұ������������
   
    	var images=['images/feiji1.png'];
		var url=images[Math.floor(Math.random()*images.length)];
    
	
    //���� ��Ұ��������������ʱ����������ֵ���� arr ��
    //ˢ��ҳ��ʱ arr ����ô洢��Ұ���Ƶ���������
//  words.on("child_added", function (snap) {
//      arr.push(snap.val());
//  });
//
//  //������ Ұ���Ƶ� words �ڵ㣬���ýڵ㱻ɾ��ʱ�������arr ��������ÿ�
//  ref.on("child_removed", function () {
//      arr = [];
//      $("#showWords").empty(); //ɾ����ʾ������Ԫ��
//  });
//
//  //������ ��Ұ���� words�µ�ֱ���ӽڵ㱻ɾ��ʱɾ������ arr �ж�Ӧ��ֵ
//  words.on("child_removed", function (snap) {
//      var deletedWord = snap.val();
//      for (var i = 0; i < arr.length; i++) {
//          if (arr[i] == deletedWord) {
//              arr.splice(i, 1);
//              break;
//          }
//      }
//
//  });

    //ÿ3�����������ϵ���Ұ�����ϵ�����
    var getAndRun = function () {
        var i = arr.length;
        if (i > 0) {
            var y = Math.floor(i * Math.random());
            
            moveObj(obj);
        }

        setTimeout(getAndRun, 3000); //ÿ3�����һ������
    }

    //������ʾ���ĸ߶�Ϊ�������ʾ���ڸ߶ȵ�60%
    

    //���������ɫֵ
    var setColor = function () {
        var i = Math.floor(256 * (Math.random()));
        return i;
    }
	
    //�÷������Ϣ������
    var moveObj = function (obj) {
        var topMax = $("#showWords").height();
        var _top = Math.floor(topMax * (Math.random())); //����top��ʼλ��Ϊ���߶��ڵ������
        if (_top + obj.height() >= topMax) {
            _top -= obj.height();
        }

        var _left = $("#showWords").width() + obj.width(); //����left��ʼλ��λ����ʾ������Ҳ�

        //��ʼ����Ϣλ��
        obj.css({
            "top": _top,
            "left": _left,
            "color": "rgb(" + setColor() + "," + setColor() + "," + setColor() + ")" //���� setColor �������������ɫ
        });

        var time =Math.random() *(55000- 50000) + 50000;

        //���ж���������������ص���ʼλ��
        obj.animate({
            left: -$("#showWords").offset().left - obj.width()*2
        }, time, function () {
            obj.remove();
        });
    }
	
	
	
//	var tel = "13122223333";
//
//var reg = /^(\d{3})\d{4}(\d{4})$/;
//
//tel = tel.replace(reg, "$1****$2");
//console.log(tel);
//	
    //���������͡���ťʱִ�����´���
    $("#addWords").click(function () {
    	var dm_phone=$('#tel2').val();
    	var dm_nc=$('#name2').val();
    	var dm_gbb=$('#gaobai').val();
		if(dm_phone==''){   //��֤�ֻ����Ƿ�Ϊ��
			alert('����д�ֻ���');
			return false;
			}
		var regg=/^0?1[3456789]\d{9}$/; //�ֻ�������
		if(!regg.test(dm_phone)){   //��֤�ֻ����Ƿ���ȷ
			alert('����д��ȷ���ֻ��ţ�');
			return false;
			}
		if(dm_nc==''){   //��֤�ֻ����Ƿ�Ϊ��
			alert('����д�����ǳ�');
			return false;
			}
		if(dm_gbb==''){   //��֤�ֻ����Ƿ�Ϊ��
			alert('���������ĸ��~');
			return false;
			}
		
    	
    	zhengze=$("#tel2").val().substring(0,3)+'****'+$("#tel2").val().substring(7,11);
        word = $("#name2").val() +'&nbsp;'+ zhengze+'&nbsp;'+ $("#gaobai").val(); //��ȡ������е�ֵ���浽ȫ�ֱ���word��
		
		
        //�������ֵ��Ϊ��ʱ��ִ�����´���
        if (word != "") {
            ref.child('words').push(word); //��word��ֵд��Ұ����
//          $("#name2").val("");//��������
//          $("#tel2").val("");//��������
//          $("#gaobai").val("");//��������
            var obj = $("<span class='moveWord'>"+"<img src='" +url+"' style='position:absolute; width:145px;height:128px;left:-136px;top:-50px;'>"+ "<img src='images/feiji_bg1.png' style='position:absolute;width:30px;height:58px;right:-30px;top:0px;'>" + word + "</span>"); //Ϊwordֵ���ɶ���
            $("#showWords").append(obj); //�����ɵĶ��󸽼ӵ������
            moveObj(obj); //���� moveObj ����ʹ���ɵĶ�������
        }
        $("#name2").focus(); //���������������
    });

    //��������������ť��ɾ�����ݣ���λ���ڵ��µ��� remove()
    $("#removeAll").click(function () {
        ref.child("words").remove(); //ɾ��Ұ���� words �ӽڵ��µ�����
        $("#showWords").empty(); //ɾ����ʾ������Ԫ��
        arr = [];
    });

    getAndRun();
    
    
    
    
//////////////////////////////////////
    lll()
    function lll(){
    
var tiq='���Ϻ� 183****7878 lzj�����ҹɫ������ ';
	var tiqq=$("<span class='moveWord' style='background:#fff;'>"+"<img src='images/feiji2.png' style='width:120px;height:84px;left:-120px;top:-20px;'>" + "<img src='images/feji_bg2.png' style='position:absolute;width:30px;height:58px;right:-30px;top:0px;'>" + tiq + "</span>");
	var _leftd = $("#showWords").width() - tiqq.width();
	tiqq.css({"left":_leftd})
	$('#showWords').append(tiqq);
	moveObj(tiqq)
	
}
    setInterval(function(){
    	lll()
    },10000)
    
//////////////////////////////////  
    
setTimeout(function(){
   hhh()
    function hhh(){
    
var tiq='���� 183****5762 �����̫������';
	var tiqq=$("<span class='moveWord' style='background:#fff;'>"+"<img src='images/feiji2.png' style='width:120px;height:84px;left:-120px;top:-20px;'>" + "<img src='images/feji_bg2.png' style='position:absolute;width:30px;height:58px;right:-30px;top:0px;'>" + tiq + "</span>");
	var _leftd = $("#showWords").width() - tiqq.width();
	tiqq.css({"left":_leftd})
	$('#showWords').append(tiqq);
	moveObj(tiqq)
	
}
    setInterval(function(){
    	hhh()
    },12000)
 },12000)
//////////////////////////////////////////////////
setTimeout(function(){
   jjj()
    function jjj(){
    
var tiq='����� 152****3067 ��Ҫ�����㣬�����Ĳ���������硣�������ǣ�ӳ���������ģ������ͫ';
	var tiqq=$("<span class='moveWord' style='background:#fff;'>"+"<img src='images/feiji2.png' style='width:120px;height:84px;left:-120px;top:-20px;'>" + "<img src='images/feji_bg2.png' style='position:absolute;width:30px;height:58px;right:-30px;top:0px;'>" + tiq + "</span>");
	var _leftd = $("#showWords").width() - tiqq.width();
	tiqq.css({"left":_leftd})
	$('#showWords').append(tiqq);
	moveObj(tiqq)
	
}
    setInterval(function(){
    	jjj()
    },20000)
},20000)

///////////////////////////////////////
setTimeout(function(){
  kkk()
    function kkk(){
    
var tiq='CaiYvXN 150****2745 ������������һ�꣬û�����̵�һ�꣬���ؼҿ������˰ɣ���ϧ';
	var tiqq=$("<span class='moveWord' style='background:#fff;'>"+"<img src='images/feiji2.png' style='width:120px;height:84px;left:-120px;top:-20px;'>" + "<img src='images/feji_bg2.png' style='position:absolute;width:30px;height:58px;right:-30px;top:0px;'>" + tiq + "</span>");
	var _leftd = $("#showWords").width() - tiqq.width()*2;
	tiqq.css({"left":_leftd})
	$('#showWords').append(tiqq);
	moveObj(tiqq)
	
}
    setInterval(function(){
    	kkk()
    },28000)
},28000)
////////////////////////////////////////////////////
setTimeout(function(){
  qqq()
    function qqq(){
    
var tiq='���� 188****5551 2019���ͣ��ϰ�GOGO';
	var tiqq=$("<span class='moveWord' style='background:#fff;'>"+"<img src='images/feiji2.png' style='width:120px;height:84px;left:-120px;top:-20px;'>" + "<img src='images/feji_bg2.png' style='position:absolute;width:30px;height:58px;right:-30px;top:0px;'>" + tiq + "</span>");
	var _leftd = $("#showWords").width() - tiqq.width()*2;
	tiqq.css({"left":_leftd})
	$('#showWords').append(tiqq);
	moveObj(tiqq)
	
}
    setInterval(function(){
    	qqq()
    },34000)
},34000)
////////////////////////////////////////////
setTimeout(function(){
  www()
    function www(){
    
var tiq='С�� 159****0105 JOJO���Ҳ���������';
	var tiqq=$("<span class='moveWord' style='background:#fff;'>"+"<img src='images/feiji2.png' style='width:120px;height:84px;left:-120px;top:-20px;'>" + "<img src='images/feji_bg2.png' style='position:absolute;width:30px;height:58px;right:-30px;top:0px;'>" + tiq + "</span>");
	var _leftd = $("#showWords").width() - tiqq.width()*2;
	tiqq.css({"left":_leftd})
	$('#showWords').append(tiqq);
	moveObj(tiqq)
	
}
    setInterval(function(){
    	www()
    },40000)
},40000)
/////////////////////////////////////////////////
setTimeout(function(){
  eee()
    function eee(){
    
var tiq='���� 156****5215 ���ڣ�������ʵ�Ĳ���ѩ���㲻�ڣ������ﶬ��';
	var tiqq=$("<span class='moveWord' style='background:#fff;'>"+"<img src='images/feiji2.png' style='width:120px;height:84px;left:-120px;top:-20px;'>" + "<img src='images/feji_bg2.png' style='position:absolute;width:30px;height:58px;right:-30px;top:0px;'>" + tiq + "</span>");
	var _leftd = $("#showWords").width() - tiqq.width()*2;
	tiqq.css({"left":_leftd})
	$('#showWords').append(tiqq);
	moveObj(tiqq)
	
}
    setInterval(function(){
    	eee()
    },45000)
},45000)
////////////////////////////////////////////////////////////////
setTimeout(function(){
  rrrr()
    function rrrr(){
    
var tiq='����ɭ 156****5215 �����Ĳ��������죬����������������ܡ�';
	var tiqq=$("<span class='moveWord' style='background:#fff;'>"+"<img src='images/feiji2.png' style='width:120px;height:84px;left:-120px;top:-20px;'>" + "<img src='images/feji_bg2.png' style='position:absolute;width:30px;height:58px;right:-30px;top:0px;'>" + tiq + "</span>");
	var _leftd = $("#showWords").width() - tiqq.width()*2;
	tiqq.css({"left":_leftd})
	$('#showWords').append(tiqq);
	moveObj(tiqq)
	
}
    setInterval(function(){
    	rrrr()
    },50000)
},50000)


});

	