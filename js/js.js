// JavaScript Document
$(function(){
	
	//点击任意模块，跳转到该模块

	
	$('#nav a').bind('click',function(event){
		var $anchor = $(this);
		$('body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-$('.nav').height()}, 600);
		event.preventDefault();
	});
	
	//小屏幕的时候，点击图片出现导航
	var bBtn = true;
	$('#btn').on('tap',function(){
		if(bBtn) {
			$('.nav_resume').animate({left:0},500);	
		} else {
			$('.nav_resume').animate({left:-$('.nav_resume').width()},500);	
		}
		bBtn = !bBtn;
	});
	$('#btn').on('click',function(){
		if(bBtn) {
			$('.nav_resume').animate({left:0},500);	
		} else {
			$('.nav_resume').animate({left:-$('.nav_resume').width()},500);	
		}
		bBtn = !bBtn;	
	});
	
});