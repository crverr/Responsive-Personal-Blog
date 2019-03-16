$(document).ready(function() {

	// 关闭按钮
	$("#close").click(function() {
		$("#Sign-In").css("display", "none");
	});

	// 农场
	$("#seed").bind("click", function() {
		$("#temp").remove();
		$("#myfarm").prepend("<span id='temp'><img src='images/seeds.png' width='400px' height='200px'></span>");
		$("img").css({"position":"absolute","top":"22em","left":"45em"});
	});
	$("#grow").bind("click", function(){
		$("#temp").remove();
		$("#myfarm").append("<span id='temp'><img src='images/grows.png' width='400px' height='200px'></span>");
		$("img").css({"position":"absolute","top":"22em","left":"45em"});
	});
	$("#bloom").bind("click", function(){
		$("#temp").replaceWith("<span id='temp'><img src='images/blooms.png' width='400px' height='200px'></span>");
		$("img").css({"position":"absolute","top":"22em","left":"45em"});
	});
	$("#fruit").bind("click", function(){
		$("<span id='temp'><img src='images/fruits.png' width='400px' height='200px'></span>").replaceAll("#temp");
		$("img").css({"position":"absolute","top":"22em","left":"45em"});
	});
	$("#seed,#grow,#bloom,#fruit").bind("click", function() {
		$("#temp").pngFix();
		$("#temp").css({"position":"absolute","top":"22em","left":"195"});
	});

	// 登陆
	$("#button").click(function(){
		$.get("test.php",{username:$("#username").val(),
			password:$("#password").val()
		},
			function(data){
				$("#add").html("用户名:"+data.username+
					"<br/>密码："+data.password)
			},"json");
	})

	// 选择器
	$("#input-button").click(function(){
		var SelectInput = $("#input-seletor").val();
		$(".found-element", "#right").removeClass("found-element");
		$(SelectInput, "#right").addClass('found-element');
		$("#jQuery-Selector").text("$('"+SelectInput+"').addClass('found-element')");


		//移除found-element类
		//$(".found-element", "#right").removeClass("found-element");

		//计算多少个符合的元素
		var CountNumber = $(SelectInput, "#right").length;
		$("#Selector-count").text(CountNumber);

		//返回元素内容
		$("#code").text($("#right").html());

		//each()在指定的元素遍历
		//append()在指定的元素添加内容
		var results = $(SelectInput, "#right");
		for(var i=0;i<=5;i++) {
			console.log(results[i]);
		}

		$("#Selector-results").empty();
		results.each(function() {
			$("#Selector-results").append("<div>"+"&lt;"+this.tagName+(this.id ? ('#' + this.id) : '')+"&gt;"+"</div>");
		});

	});
});

