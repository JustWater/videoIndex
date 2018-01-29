var login = $("#login");
var register = $("#register");
var logRegDiv = $("#logRegDiv");
var maskDiv = $("#maskDiv");
$(document).on('click', login, function() {
	var loginMaskDiv = $("<div id='loginMaskDiv'></div>");
	var loginContent = '<div class="userMaskDiv">' +
		'<h3>账号登录</h3>' +
		'<b id = "closeLogin"></b>' +
		'<form>' +
		'<div class ="rowDiv">' +
		'<div class="userSetting">用户名：</div>' +
		'<div>' +
		'<input type="text" placeholder="请输入用户名" />' +
		'</div>' +
		'</div>' +
		'<div class ="rowDiv">' +
		'<div class="userSetting">密 码：</div>' +
		'<div>' +
		'<input type="password" placeholder="请输入密码" />' +
		'</div>' +
		'</div>' +
		'<input type="submit" value="登录" id="checkIn" class="userBtn" />' +
		'</form>' +
		'<div>';
	loginMaskDiv.html(loginContent);
	logRegDiv.append(loginMaskDiv);
	maskDiv.show();
	makePosition(this);
})

function makePosition(obj) {
	// var objMaskDiv = ById(obj.id + 'MaskDiv');
	// var sWidth = document.documentElement.clientWidth || document.body.clientWidth;
	// var sHeight = document.documentElement.clientHeight || document.body.clientHeight;
	// var objMaskDivHeight = parseInt(objMaskDiv.offsetHeight);
	// var objMaskDivWidth = parseInt(objMaskDiv.offsetWidth);
	// objMaskDiv.style.top = parseInt((sHeight - objMaskDivHeight) / 2) + 'px';
	// objMaskDiv.style.left = parseInt((sWidth - objMaskDivWidth) / 2) + 'px';
	// var objMaskDiv = $(#(obj.attr("id") + 'MaskDiv'));
	// var sWidth = $(document).width();
	// var sHeight = $(document).height();
	// var objMaskDivHeight = parseInt(objMaskDiv.height());
	// var objMaskDivWidth = parseInt(objMaskDiv.width());
	// objMaskDiv.css({
	// 	"left": "parseInt((sWidth - objMaskDivWidth) / 2) + 'px'",
	// 	"top": "parseInt((sHeight - objMaskDivHeight) / 2) + 'px'"
	// })
}