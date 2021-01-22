/*
* @Author: Administrator
* @Date:   2019-01-08 11:49:42
* @Last Modified by:   Administrator
* @Last Modified time: 2019-01-08 11:58:56
*/
//封装对象
	// 属性：width,height,
	// 行为：render,changeDirection
	function Sprite(option){
		this._init(option);
	}
	Sprite.prototype={
		_init:function(option){
			this.imgSrc=option.imgSrc;
			this.x=option.x===0?0:option.x;
			this.y=option.y===0?0:option.y;
			//canvas上显示的款宽度和高度
			this.w=option.w||40;
			this.h=option.h||65;
			//裁剪后的宽高
			this.w0=option.w0||40;
			this.h0=option.h0||65;
 
			this.dirIndex=0;
			this.speed=option.speed||10;
		},
		//画图
		render:function(ctx){
			var img=new Image();
			img.src=this.imgSrc;
			var that=this;
			img.onload=function(){
				var i=0;
				setInterval(function(){
					ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);//ctx就是传递过来的上下文
					// ctx.canvas.width=ctx.canvas.width;
					ctx.drawImage(
					img,
					that.w0*i,
					that.h0*that.dirIndex,
					that.w0,
					that.h0,
					that.x,
					that.y,
					that.w,
					that.h
					);
					i++;
					i=i%4;
				},1000/that.speed);
			}
		},
		changeDirection:function(dir){
			if(dir=='left'){
				this.dirIndex=1;
			}else if(dir=='right'){
				this.dirIndex=2;
			}
			else if(dir=='up'){
				this.dirIndex=3;
			}else{
				this.dirIndex=0;
			}
		}
	};
