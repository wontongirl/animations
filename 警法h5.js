/*
 *  .--,       .--,
 * ( (  \.---./  ) )
 *  '.__/o   o\__.'
 *     {=  ^  =}
 *      >  -  <
 *     /       \
 *    //       \\
 *   //|   .   |\\
 *   "'\       /'"_.-~^`'-.
 *      \  _  /--'         `
 *    ___)( )(___
 *   (((__) (__)))    a-r-e-a-z-e-r-o。
 */

setTimeout(function(){loadAnimation();},8000);
setTimeout(function(){$("canvas").remove();},8000);
function loadAnimation() {
  //console.log("start");
  $('.loading-wrap').addClass('end');
  $('.planet,.white-clouds,.clouds,.protagonist,.start-btn,.main-title').hide();
  setTimeout(function () {
    $('.loading-wrap').hide();
    $('.planet').fadeIn(500);
    $('.white-clouds').fadeIn(500);
    $('.clouds').fadeIn(500);
    setTimeout(function () {
      $('.protagonist').fadeIn(500);
      setTimeout(function () {
        $('.start-btn').fadeIn(500);
        setTimeout(function () {
          $('.main-title').fadeIn(500);
        },300)
      },300)
    },300)
  },1500);
}

var audioPlaying = false;
audioPlay();
$('.music-button').on('click', function () {
  if (audioPlaying) {
    $('#audio').get(0).pause();
    $('.music-button').removeClass('on');
    audioPlaying = false;
  } else {
    $('#audio').get(0).play();
    $('.music-button').addClass('on');
    audioPlaying = true;
  }
});

var swiperFlag=false;
swiper = new Swiper('.swiper-container', {
  // initialSlide:5,
  direction : 'vertical',
  //direction : 'horizontal',
  speed:1000,
  preventClicks : false,
  on: {
    slideChangeTransitionEnd: function(){
   /*   $('.choice').removeClass('no');*/
      swiperFlag=false
      // swiper.detachEvents()
    },
  },
});

//点击开始
/*$('.page01 .start-btn').on('click',function () {
  $("body,html").scrollTop(0);
    swiper.slideNext();
});*/

///长按开始
var touchFlag1=true,touchSetInterval1,w1=0,times1=1000,refresh1=50;
$('.start-btn').on('touchstart',function (e) {
  $("body,html").scrollTop(0);
  if(touchFlag1) {
    touchSetInterval1= setInterval(function () {
      crystalLoading1();
    },refresh1)
  }
  e.preventDefault();
});
$('.start-btn').on('touchend',function () {
  //console.log("touchend");
  clearInterval(touchSetInterval1);
  $('.protagonist').removeClass("myRocket").removeClass("myFlyPro");
});
function crystalLoading1() {
  w1 = w1 + refresh1/times1;
  if (w1 < 1){
    //console.log(w1);
    $('.protagonist').addClass("myRocket");
  } else {
    //console.log('end');
    touchFlag1=false;
    $('.protagonist').removeClass("myRocket").addClass("myFlyPro");
    clearInterval(touchSetInterval1);
    setTimeout(function () {
      swiper.slideNext();
    },900);
  }
}

$(".sex-selection li").on('click',function () {
  $("body,html").scrollTop(0);
  $(this).addClass("active").siblings().removeClass("active");
  var gender = $(this).attr("data-value");
  $.cookie("ugender",gender);
  swiperFlag=true;
  //swiper.slideNext();
});

$(".question-selection li").on('click',function () {
  $(this).addClass("active").siblings().removeClass("active");
  swiperFlag=true;
  //swiper.slideNext();/*browser test*/
});

// ios端输入框问题
$('form')
    .on('click', 'input', function () {
      $(this).focus()
    })
    .on('blur', 'input', function () {
      $('html, body').scrollTop(0)
    });

var touchFlag=false,touchSetInterval,w=0,times=1000,refresh=50;
$('.escape-btn').on('touchstart',function (e) {
  //console.log("!23",swiperFlag)
  $("body,html").scrollTop(0);
  username = $('.escape-name').val();
  if (username == '') {
    alert('快输入昵称逃离喵星球！')
  } else {
    touchFlag=true;
    if(touchFlag) {
      touchSetInterval= setInterval(function () {
        crystalLoading();
      },refresh)
    }
  }
  e.preventDefault();
});
$('.escape-btn').on('touchend',function () {
  clearInterval(touchSetInterval);
  $('.escape-rocket').removeClass("myRocket").removeClass("myFlyRocket");
});
function crystalLoading() {
  w = w + refresh/times;
  if (w < 1){
    //console.log(w);
    $('.escape-rocket').addClass("myRocket");
  } else {
    //console.log('end');
    touchFlag=false;
    $('.escape-rocket').removeClass("myRocket").addClass("myFlyRocket");
    clearInterval(touchSetInterval);
    end();
    $('.page-save').css("visibility","hidden");
    setTimeout(function () {
      swiper.slideNext();
      $('.page-save').hide();
    },900);
  }
}

var queArray = [];
$(".question-selection1 li").on('click',function () {
  var ques1 = $(this).attr("data-value");
  queArray.push(ques1);
  return queArray;
});
$(".question-selection2 li").on('click',function () {
  var ques2 = $(this).attr("data-value");
  queArray.push(ques2);
  return queArray;
});
$(".question-selection3 li").on('click',function () {
  var ques3 = $(this).attr("data-value");
  queArray.push(ques3);
  return queArray;
});
$(".question-selection4 li").on('click',function () {
  var ques4 = $(this).attr("data-value");
  queArray.push(ques4);
  $.cookie("uqueArray",queArray);
});

function end() {
  var myName = $(".escape-name").val();
  var queScore=0;
  var myQueString = $.cookie("uqueArray");
  myQueArray = myQueString.split(",");
  //console.log(myQueArray)
  for(var i=0;i<myQueArray.length;i++){
    queScore +=  Number(myQueArray[i]);
  }
  var myGender = $.cookie('ugender');
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var myRanNum =  getRandomInt(0,2);
  if (myGender == "w"){
    if (queScore == 4){
      $(".result-title").html("<span  class='white'>" + myName + "很可惜</span>");
      $(".result-img").attr("src","images/img-bhh.jpg");
      $(".btn-img").attr("src","images/btn-bhh.png");
    }else{
      $(".result-title").html("<span  class='white'>" + myName + "最适合做：</span>");
      $(".result-img").attr("src","images/img-wzfj.jpg");
      $(".btn-img").attr("src","images/btn-wzfj.png");
    }
  }else{
    if (queScore == 4){
      $(".result-title").html("<span  class='white'>" + myName + "很可惜</span>");
      $(".result-img").attr("src","images/img-bhh.jpg");
      $(".btn-img").attr("src","images/btn-bhh.png");
    }else if (5 <= queScore && queScore <= 6){
      if (myRanNum == 0){
        $(".result-title").html("<span  class='black'>" + myName + "最适合做：</span>");
        $(".result-img").attr("src","images/img-jfj.jpg");
        $(".btn-img").attr("src","images/btn-jfj.png");
      }else{
        $(".result-title").html("<span  class='white'>" + myName + "最适合做：</span>");
        $(".result-img").attr("src","images/img-lzkh.jpg");
        $(".btn-img").attr("src","images/btn-lzkh.png");
      }
    }else if (7 <= queScore && queScore <= 8){
      if (myRanNum == 0){
        $(".result-title").html("<span  class='white'>" + myName + "最适合做：</span>");
        $(".result-img").attr("src","images/img-zfqw.jpg");
        $(".btn-img").attr("src","images/btn-zfqw.png");
      }else{
        $(".result-title").html("<span  class='white'>" + myName + "最适合做：</span>");
        $(".result-img").attr("src","images/img-xgy.jpg");
        $(".btn-img").attr("src","images/btn-xgy.png");
      }
    }else if (9 <= queScore && queScore <= 12){
      $(".result-title").html("<span  class='white'>" + myName + "最适合做：</span>");
      $(".result-img").attr("src","images/img-tq.jpg");
      $(".btn-img").attr("src","images/btn-tq.png");
    }
  }/*if end*/
  $(".page-save").show();
  usehtml2canvas($('.page-save').get(0));
}

$('.save').on('click',function () {
  $('.dialog-save').show();
});
$('.dialog-save-close').on('click',function () {
  $('.dialog-save').hide();
});


var start=0,distance=0,distanceMax=50,nextFlag=false;
$('.page').on('touchstart',function (e) {
  nextFlag=true;
  start = e.changedTouches[0].pageY;
  //console.log('touchstart',e.changedTouches[0].pageY)
});
$('.page').on('touchmove',function (e) {
  var move = e.changedTouches[0].pageY;
  distance = start-move;
  //console.log(distance);
  if (swiperFlag && nextFlag && distance > distanceMax) {
    //console.log('next');
    nextFlag=false;
    swiperFlag=false;
    swiper.slideNext();
  } else {
    // console.log('touchmove')
  }
});
$('.page').on('touchend',function (e) {
  nextFlag=false;
});

function usehtml2canvas(dom) {
  var cntElem = dom;
  var shareContent = cntElem;
  var width = shareContent.offsetWidth;
  var height = shareContent.offsetHeight;
  var canvas = document.createElement("canvas");
  var scale = 2;
  canvas.width = width * scale;
  canvas.height = height * scale;
  canvas.getContext("2d").scale(scale, scale);
  var opts = {
    scale: scale,
    canvas: canvas,
    width: width,
    height: height,
    useCORS: true
  };

  html2canvas(shareContent, opts).then(function (canvas) {
    var context = canvas.getContext('2d');
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    /*var src = canvas.toDataURL("image/png");*/
    /*var img1 = new Image();
    img1.src = src;
    img1.onload = function () {
      cb(src)
    };*/
    var type = 'png';
    var imgData = canvas.toDataURL(type);
    var _fixType = function (type) {
      type = type.toLowerCase().replace(/jpg/i, 'jpeg');
      var r = type.match(/png|jpeg|bmp|gif/)[0];
      return 'image/' + r;
    };
    imgData = imgData.replace(_fixType(type), 'image/octet-stream');
    //console.log("url",imgData)
    document.querySelector('.save-img').src = imgData;
    $('.page-save').hide();
  });
}

function audioPlay(){
  $('#audio').get(0).play();
  if(window.WeixinJSBridge){
    WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
      $('#audio').get(0).play();
    }, false);
  }else{
    document.addEventListener("WeixinJSBridgeReady", function() {
      WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
        $('#audio').get(0).play();
      });
    }, false);
  }
  $('.music-button').addClass('on');
  audioPlaying = true;
}

$('._content').on('touchmove',function (event) {
  event.preventDefault();
});


$(document).ready(wxFun = function () {
  var currentURL = window.location.href;
  $.post('http://www.zgjfks.com//api.php?op=wx_gwyzjksw', {
    'url' : currentURL
  }, function (data) {
    data = JSON.parse(data);
    var timestamp = data["timeStamp"];
    var nonceStr = data["nonceStr"];
    var signature = data["signature"];
    var appId = data["appId"];
    wx.config({
      //debug: true,
      appId: appId, // 必填，公众号的唯一标识
      timestamp: timestamp, // 必填，生成签名的时间戳
      nonceStr: nonceStr, // 必填，生成签名的随机串
      signature: signature,// 必填，签名，见附录1
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function () {
      //分享给朋友
      var sharelike = 'http://www.zgjfks.com/zg/fjcatplanet/';
      //分享到微信好友
      wx.onMenuShareAppMessage({
        title: '你知道自己适合做哪类辅警吗？', // 微信好友分享标题
        desc: '你究竟适合做哪类辅警来守护喵星球，速速来测~', // 分享描述
        link: sharelike, // 分享链接
        imgUrl: 'http://www.zgjfks.com/zg/fjcatplanet/images/shareImg.png', // 微信好友分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      });
      //分享到朋友圈
      wx.onMenuShareTimeline({
        title: '你知道自己适合做哪类辅警吗？', // 朋友圈分享标题
        link: sharelike, // 朋友圈分享链接
        imgUrl: 'http://www.zgjfks.com/zg/fjcatplanet/images/shareImg.png', // 朋友圈分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      });
    });
    wx.error(function (res) {
      console.log(res)
    });
  }, 'json');
});