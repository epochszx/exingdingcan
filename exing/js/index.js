

$(function(){
	//为左侧导航绑定事件
	$(".left-nav ul").on("click","li",function(){
		$(".left-nav >ul>li").removeClass("current");
		$(this).addClass("current");
		//点击加载右面内容界面
		var url = $(this).attr("url");
		//拼接事件戳,用于消除浏览器缓存
		$("#content-wrapper").load(url+"?time"+Math.random())
	})

	//默认选中第一个li
	$(".left-nav li:first-child").trigger("click");

	
})