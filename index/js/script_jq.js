var login = $("#login");
var register = $("#register");
var logRegDiv = $("#logRegDiv");
var maskDiv = $("#maskDiv");

$(document).on('click','#login',function(){
	if ($("#loginMaskDiv").text()!="") {
		var loginMaskDiv = $("#loginMaskDiv");
		loginMaskDiv.show();
	}else{
		var loginMaskDiv = $("<div id='loginMaskDiv'></div>");
		var loginContent = '<div class="userMaskDiv">' +
		'<h3>账号登录</h3>' +
		'<b id = "closeLogin"></b>' +
		'<form onsubmit="return check()">' +
		'<div class ="rowDiv">' +
		'<div class="userSetting">用户名：</div>' +
		'<div>' +
		'<input type="text" placeholder="请输入用户名" id="logUser" class="rightInput"/>' +
		'</div>' +
		'</div>' +
		'<div class ="rowDiv">' +
		'<div class="userSetting">密 码：</div>' +
		'<div>' +
		'<input type="password" placeholder="请输入密码" id="logPwd" class="rightInput"/>' +
		'</div>' +
		'</div>' +
		'<div class ="rowDiv">' +
		'<div class ="chooseSave" >' +
		'<input type="checkbox" id ="checkbox" class="leftInput"/>' +
		'<span class="spanRight">记住密码</span>' +
		'</div>' +
		'</div>' +
		'<input type="button" value="登录" id="checkIn" class="userBtn" />' +
		'</form>' +
		'<div>';
		loginMaskDiv.html(loginContent);
		logRegDiv.append(loginMaskDiv);
	}
	maskDiv.show();
	makePosition(this.id);
	$("#closeLogin").on('click',function(){
		closeMaskDiv("loginMaskDiv");
	})
	$("#checkIn").on('click',function(){
		var logUserVal = $("#logUser").val(),
		logPwdVal =$("#logPwd").val();
		if(logUserVal==''){
			showMask("warning","用户名不能为空");
		}else if(logPwdVal==""){
			showMask("warning","密码不能为空");
		}else{
			var url = "http://zmhwater.vicp.io/videousers/1";
			var data = '{"accountnumber":"'+logUserVal+'","password":"'+logPwdVal+'"}';
			$.ajax({
				url:url,
				type:'POST',
				data: data,
				dataType:"json",
				contentType:"application/json;charset=UTF-8",
				success:function(result){
					loginMaskDiv.hide();
					showMask("success","登录成功");
					changeBtn(result,"loginMaskDiv");

				},
				error:function(result){
					showMask("error","账号信息不正确");
				}
			})
		}

	})
})

$(document).on('click','#register',function(){
	if ($("#registerMaskDiv").text()!="") {
		var registerMaskDiv = $("#registerMaskDiv");
		registerMaskDiv.show();
	}else{
		var registerMaskDiv = $("<div id='registerMaskDiv'></div>");
		var registerContent = 
		'<div class="userMaskDiv">' +
		'<h3>账号注册</h3>' +
		'<b id = "closeRegister"></b>' +
		'<form>' +
		'<div class ="rowDiv">' +
		'<div class="userSetting">用户名：</div>' +
		'<div>' +
		'<input type="text" placeholder="请输入用户名" id="regUser" class="rightInput" index = "1"/>' +
		'<span class="spanNormal"></span>' +
		'</div>' +
		'</div>' +
		'<div class ="rowDiv">' +
		'<div class="userSetting">密码：</div>' +
		'<div>' +
		'<input type="password" placeholder="请输入密码" id="regPwd" class="rightInput" index = "2"/>' +
		'<span class="spanNormal"></span>' +
		'</div>' +
		'</div>' +
		'<div class ="rowDiv">' +
		'<div class="userSetting" id="regPwdAga">确认密码：</div>' +
		'<div>' +
		'<input type="password" placeholder="请再次输入密码" class="rightInput" index = "3"/>' +
		'<span class="spanNormal"></span>' +
		'</div>' +
		'</div>' +
		'<div class = "tipDiv" id="tipDiv">'+
		'</div>'+
		'<input type="button" value="注册" id="registerIn" class="userBtn checkBtn" />' +
		'</form>'+
		'</div>';
		registerMaskDiv.html(registerContent);
		logRegDiv.append(registerMaskDiv);
	}
	maskDiv.show();
	makePosition(this.id);
	$("#closeRegister").on('click',function(){
		closeMaskDiv("registerMaskDiv");
	})
	var regUser = $("#regUser"),
	regPwd =$("#regPwd");
})

var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
var pPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,16}$/;
var checkReg = [];
checkReg.push(uPattern);
checkReg.push(pPattern);
checkReg.push(pPattern);
var checkData = [];
$(document).on("blur",'.rightInput',function(){
	var regUser = $("#regUser"),
	regPwd =$("#regPwd");
	regPwdAga = $("#regPwdAga");
	// checkData.push(regUser);
	// checkData.push(regPwd);
	// checkData.push(regPwdAga);
	var index = parseInt($(this).attr("index"));
	var tipDiv = $("#tipDiv"); 
	switch(index){
		case '1':
			// if (!uPattern.test(regUser.val())) {
			// 	tipDiv.removeClass("tipDivTrue");
			// 	tipDiv.addClass("tipDivWrong");
			// 	tipDiv.text("用户名输入错误");
			// }else{
			// 	tipDiv.removeClass("tipDivWrong");
			// 	tipDiv.addClass("tipDivTrue");
			// 	tipDiv.text("用户名输入正确");
			// }
			aa(uPattern,regUser,tipDiv,"用户名输入错误");
			break;
			case '2':

			break;
			case '3':
			break;

		}
		if($(this).val()==""){
			if (index == 3) {
				tipDiv.text("请输入密码");
			}else{
				tipDiv.text($(this).attr("placeholder"));
			}
			tipDiv.addClass("tipDivWrong");
		}
		var inputLine = $(this).parent().prev().text().split("：")[0];
		if(inputLine=="确认密码"){
			tipDiv.text("请输入密码");
			$(this).attr("placeholder","请再次输入密码");
		}else{
			tipDiv.text("请输入"+inputLine);
			$(this).attr("placeholder","请输入"+inputLine);
		}
	})
$(document).on('click','.rightInput',function(){
	var tipDiv = $("#tipDiv"); 
	if(tipDiv.hasClass("tipDivWrong")){
		tipDiv.removeClass("tipDivWrong");
		tipDiv.text("");
	}
	$(this).attr("placeholder","");
})

function aa(objRep,objVal,tipDiv,str){
	if (!objRep.test(objVal.val())) {
		tipDiv.removeClass("tipDivTrue");
		tipDiv.addClass("tipDivWrong");
		tipDiv.text(str);
	}else{
		tipDiv.removeClass("tipDivWrong");
		tipDiv.addClass("tipDivTrue");
		tipDiv.text("用户名输入正确");
	}
}
function closeMaskDiv(objDiv){
	var curMaskDiv = $("#"+objDiv);
	curMaskDiv.hide();
	maskDiv.hide();
}
function makePosition(id){
	var curId = (id+"MaskDiv");
	var curMaskDiv = $("#"+curId);
	var sWidth = $(window).width();
	var sHeight = $(window).height();
	var objMaskDivWidth = curMaskDiv.width();
	var objMaskDivHeight = curMaskDiv.height();
	curMaskDiv.css({"left":parseInt((sWidth - objMaskDivWidth) / 2) + 'px',
		"top":parseInt((sHeight - objMaskDivHeight) / 2) + 'px'})
}

function changeBtn(result,objDiv){
	login.remove();
	register.remove();
	$("#"+objDiv).remove();
	maskDiv.hide();
	var userLogo = $("<div id='userLogo' class='userLogo'></div>");
	var userName = $("<div id='userName' class='userName'></div>");
	userName.text("Hello," + result.name);
	var userBehavior = $(".userBehavior").append(userLogo);
	var userBehavior = $(".userBehavior").append(userName);
}
$(window).resize(function(){
	if (logRegDiv.find("#loginMaskDiv").is(":visible")) {
		makePosition("login")
	}
	else if(logRegDiv.find("#registerMaskDiv").is(":visible")){
		makePosition("register");
	}
})