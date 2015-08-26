// JavaScript Document
$(function(){
	
	//点击任意模块，跳转到该模块

	
	$('#nav a').bind('click',function(event){
		var $anchor = $(this);
		$('html,body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-$('.nav').height()}, 600);
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
	
	$(document).on('scroll',function(){
		if($(document).scrollTop()<$('.section').height()-10) {
			$('#nav').css('opacity',0);
		} else {
			$('#nav').css('opacity',1);
		}
	});
	
	$('.btn_next').click(function(){
		$('html,body').stop().animate({scrollTop: $('.section').height()}, 600);
	});
	
});