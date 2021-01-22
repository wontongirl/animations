
var ref = new Wilddog("http://sc.chinaz.com/");
var words = ref.child("words");

$(document).ready(function () {
	
    var word; //用来存储输入框中的值
    var arr = []; //用来存储野狗云已有数据
   
    	var images=['images/feiji1.png'];
		var url=images[Math.floor(Math.random()*images.length)];
    
	
    //监听 当野狗云中新增数据时，将新增的值存入 arr 中
    //刷新页面时 arr 将获得存储在野狗云的所有数据
//  words.on("child_added", function (snap) {
//      arr.push(snap.val());
//  });
//
//  //监听： 野狗云的 words 节点，当该节点被删除时清空数组arr 并将面板置空
//  ref.on("child_removed", function () {
//      arr = [];
//      $("#showWords").empty(); //删除显示面板的子元素
//  });
//
//  //监听： 当野狗云 words下的直接子节点被删除时删除数组 arr 中对应的值
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

    //每3秒随机在面板上弹出野狗云上的数据
    var getAndRun = function () {
        var i = arr.length;
        if (i > 0) {
            var y = Math.floor(i * Math.random());
            
            moveObj(obj);
        }

        setTimeout(getAndRun, 3000); //每3秒调用一下自身
    }

    //设置显示面板的高度为浏览器显示窗口高度的60%
    

    //设置随机颜色值
    var setColor = function () {
        var i = Math.floor(256 * (Math.random()));
        return i;
    }
	
    //让发射的消息动起来
    var moveObj = function (obj) {
        var topMax = $("#showWords").height();
        var _top = Math.floor(topMax * (Math.random())); //设置top初始位置为面板高度内的随机数
        if (_top + obj.height() >= topMax) {
            _top -= obj.height();
        }

        var _left = $("#showWords").width() + obj.width(); //设置left初始位置位于显示面板最右侧

        //初始化消息位置
        obj.css({
            "top": _top,
            "left": _left,
            "color": "rgb(" + setColor() + "," + setColor() + "," + setColor() + ")" //调用 setColor 函数设置随机颜色
        });

        var time =Math.random() *(55000- 50000) + 50000;

        //进行动画，动画结束后回到初始位置
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
    //单击【发送】按钮时执行以下代码
    $("#addWords").click(function () {
    	var dm_phone=$('#tel2').val();
    	var dm_nc=$('#name2').val();
    	var dm_gbb=$('#gaobai').val();
		if(dm_phone==''){   //验证手机号是否为空
			alert('请填写手机号');
			return false;
			}
		var regg=/^0?1[3456789]\d{9}$/; //手机号正则
		if(!regg.test(dm_phone)){   //验证手机号是否正确
			alert('请填写正确的手机号！');
			return false;
			}
		if(dm_nc==''){   //验证手机号是否为空
			alert('请填写您的昵称');
			return false;
			}
		if(dm_gbb==''){   //验证手机号是否为空
			alert('请输入您的告白~');
			return false;
			}
		
    	
    	zhengze=$("#tel2").val().substring(0,3)+'****'+$("#tel2").val().substring(7,11);
        word = $("#name2").val() +'&nbsp;'+ zhengze+'&nbsp;'+ $("#gaobai").val(); //获取输入框中的值并存到全局变量word中
		
		
        //当输入的值不为空时，执行以下代码
        if (word != "") {
            ref.child('words').push(word); //将word的值写入野狗云
//          $("#name2").val("");//清空输入框
//          $("#tel2").val("");//清空输入框
//          $("#gaobai").val("");//清空输入框
            var obj = $("<span class='moveWord'>"+"<img src='" +url+"' style='position:absolute; width:145px;height:128px;left:-136px;top:-50px;'>"+ "<img src='images/feiji_bg1.png' style='position:absolute;width:30px;height:58px;right:-30px;top:0px;'>" + word + "</span>"); //为word值生成对象
            $("#showWords").append(obj); //将生成的对象附加到面板上
            moveObj(obj); //调用 moveObj 函数使生成的对象动起来
        }
        $("#name2").focus(); //将焦点置于输入框
    });

    //单击【清屏】按钮即删除数据，定位到节点下调用 remove()
    $("#removeAll").click(function () {
        ref.child("words").remove(); //删除野狗云 words 子节点下的数据
        $("#showWords").empty(); //删除显示面板的子元素
        arr = [];
    });

    getAndRun();
    
    
    
    
//////////////////////////////////////
    lll()
    function lll(){
    
var tiq='林老黑 183****7878 lzj今晚的夜色真美啊 ';
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
    
var tiq='马大哥 183****5762 今天的太阳真亮';
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
    
var tiq='林语风 152****3067 想要告诉你，美丽的不是这个世界。美丽的是，映出这个世界的，你的眼瞳';
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
    
var tiq='CaiYvXN 150****2745 过年啦，又是一年，没有奶奶的一年，都回家看看亲人吧，珍惜';
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
    
var tiq='杨悦 188****5551 2019加油！上岸GOGO';
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
    
var tiq='小浪 159****0105 JOJO，我不做人啦！';
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
    
var tiq='离人 156****5215 你在，春华秋实夏蝉冬雪。你不在，春夏秋冬。';
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
    
var tiq='赵先森 156****5215 最美的不是下雨天，是曾与你躲过雨的屋檐。';
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

	