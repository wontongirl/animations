/*
* @Author: admin
* @Date:   2018-06-20 13:47:42
* @Last Modified by:   admin
* @Last Modified time: 2018-06-20 13:47:46
*/
$(function() {
	 var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 750) {
        deviceWidth = 750;
    }
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    $(window).resize(function () {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) {
            deviceWidth = 750;
        }
        document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    });
    var winHeight = window.screen.height;
    var bodyHeight = $('.zg_wrapper').height();
    if(bodyHeight<winHeight){
        $('.zg_wrapper').css('height',winHeight+'px')
    }
	   
});


