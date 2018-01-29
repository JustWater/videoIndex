//点击注册登录
var login = ById("login");
var register = ById("register");
var oMaskDiv = ById("maskDiv");
var logRegDiv = ById("logRegDiv");

//用户名正则，4到16位（字母，数字，下划线，减号）
var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;

//封装事件
var oEvent = {
	addEventHanlder: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	removeEventHanlder: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	},
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	getElement: function(event) {
		return event.target || event.srcElement;
	}
}
//点击注册登录
oEvent.addEventHanlder(login, 'click', (function(obj) {
	showLogin(login);
}))
oEvent.addEventHanlder(register, 'click', (function(obj) {
	showLogin(register);
}))
var flagA = false;
var flagB = false;
window.onresize = function() {
	if (flagA) {
		maskPosition(login);
	}
	if (flagB) {
		maskPosition(register);
	}
}
//弹出登录注册框

//弹出登录注册框
function showLogin(obj) {
	if (!flagA) {
		if (obj.id == 'login') {
			var loginMaskDiv = document.createElement("div");
			loginMaskDiv.id = 'loginMaskDiv';
			loginMaskDiv.innerHTML =
			'<div class="userMaskDiv">' +
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
			logRegDiv.appendChild(loginMaskDiv);
			var closeBtn = ById("closeLogin");
			oEvent.addEventHanlder(closeBtn, 'click', function(i) {
				closeMaskDiv(loginMaskDiv);
			})
			flagA = true;
		}
	}
	if (!flagB) {
		if (obj.id == 'register') {
			var registerMaskDiv = document.createElement("div");
			registerMaskDiv.id = "registerMaskDiv";
			registerMaskDiv.innerHTML =
			'<div class="userMaskDiv">' +
			'<h3>账号注册</h3>' +
			'<b id = "closeRegister"></b>' +
			'<form>' +
			'<div class ="rowDiv">' +
			'<div class="userSetting">用户名：</div>' +
			'<div>' +
			'<input type="text" placeholder="请输入用户名" id="regUser" class="rightInput"/>' +
			'<span class="spanNormal"></span>' +
			'</div>' +
			'</div>' +
			'<div class ="rowDiv">' +
			'<div class="userSetting">密 码：</div>' +
			'<div>' +
			'<input type="password" placeholder="请输入密码" id="regPwd" class="rightInput"/>' +
			'<span class="spanNormal"></span>' +
			'</div>' +
			'</div>' +
			'<div class ="rowDiv">' +
			'<div class="userSetting" id="regPwdAga">确认密码：</div>' +
			'<div>' +
			'<input type="password" placeholder="请再次输入密码" class="rightInput"/>' +
			'<span class="spanNormal"></span>' +
			'</div>' +
			'</div>' +
			'<input type="submit" value="注册" id="registerIn" class="userBtn" />' +
			'</form>'+
			'</div>';
			logRegDiv.appendChild(registerMaskDiv);
			var closeBtn = ById("closeRegister");
			oEvent.addEventHanlder(closeBtn, 'click', function(i) {
				closeMaskDiv(registerMaskDiv);
			})
			flagB = true;
		}
	}
	var oMaskHeight = document.documentElement.scrollHeight;
	oMaskDiv.style.height = oMaskHeight + 'px';
	oMaskDiv.style.display = "block";
	var selectMaskDiv = ById(obj.id + 'MaskDiv');
	selectMaskDiv.style.display = "block";
	maskPosition(obj);
	//点击注册

	// 注册验证
	if (ById("registerMaskDiv") !== undefined && obj.id == "register") {
		var regUser = ById("regUser");
		var regPwd = ById("regPwd");
		var regPwdAga = ById("regPwdAga");
		var registerIn = ById("registerIn");
		//失去焦点
		var isRepTrue = true;
		oEvent.addEventHanlder(registerIn, 'click', function() {
			if (isRepTrue) {
				changeLRBtn(data, obj);
				ById("registerMaskDiv").parentNode.removeChild(ById("registerMaskDiv"));
				flagB = false;

			} else {

			}
		})
	}
	if (ById("loginMaskDiv") !== undefined && obj.id == "login") {
		var checkIn = ById("checkIn");
		var logUser = ById("logUser");
		var logPwd = ById("logPwd");
		// oEvent.addEventHanlder(checkIn, 'click', function() {
		// 	var url = "http://zmhwater.vicp.io/videousers/1";
		// 	var data1 = '{"accountnumber":"'+logUser.value+'","password":"'+logPwd.value+'"}';
		// 	$.ajax({
		// 		url:url,
		// 		type:'POST',
		// 		data: data1,
		// 		dataType:"json",
		// 		contentType:"application/json;charset=UTF-8",
		// 		success:function(result){
		// 			changeLRBtn(result, obj);
		// 			flagA = false;
		// 			$("#loginMaskDiv").remove();
		// 		},
		// 	})
		// 	// console.log(data1);
			
		// // 	// $.ajaxPost(url,data1,function (result){
		// // 	// 	console.log(result.name);
		// // 	// 	changeLRBtn(result, obj);
		// // 	// 	flagA = false;
		// // 	// 	ById("loginMaskDiv").parentNode.removeChild(ById("loginMaskDiv"));
				
		// // 	// })

		// })
		oEvent.addEventHanlder(checkIn,'click',function(){
			oMaskDiv.style.display = "none";
			$("#loginMaskDiv").remove();
		})
	}
}
function changeLRBtn(result, obj) {
	oMaskDiv.style.display = "none";
	var userBehavior = ById("userBehavior");
	var login_del = userBehavior.removeChild(login);
	var register_del = userBehavior.removeChild(register);
	var userLogo = document.createElement("div");
	var userName = document.createElement("div");
	userLogo.id = "userLogo";
	userLogo.className = "userLogo";
	userBehavior.appendChild(userLogo);
	userName.className = "userName";
	userName.innerHTML = "Hello," + result.name;
	userBehavior.appendChild(userName);

}

//登录注册框的定位
function maskPosition(obj) {
	var objMaskDiv = ById(obj.id + 'MaskDiv');
	var sWidth = document.documentElement.clientWidth || document.body.clientWidth;
	var sHeight = document.documentElement.clientHeight || document.body.clientHeight;
	var objMaskDivHeight = parseInt(objMaskDiv.offsetHeight);
	var objMaskDivWidth = parseInt(objMaskDiv.offsetWidth);
	objMaskDiv.style.top = parseInt((sHeight - objMaskDivHeight) / 2) + 'px';
	objMaskDiv.style.left = parseInt((sWidth - objMaskDivWidth) / 2) + 'px';
}
//点击关闭按钮
function closeMaskDiv(obj) {
	oMaskDiv.style.display = "none";
	obj.style.display = "none";
}

function ById(id) {
	return document.getElementById(id);
}

//点击搜索框
var searchText = ById("searchText");
var searchUl = ById("searchUl");
oEvent.addEventHanlder(searchText, 'click', function(e) {
	searchUl.style.display = "block";
	searchText.className = "formFocus searchText";
	oEvent.stopPropagation(e);
})
oEvent.addEventHanlder(document, 'click', function() {
	searchText.className = "searchText"
})

searchText.onblur = function() {
	searchUl.style.display = "none";
}



/*// 轮播图

var imgBanner = ById("imgBanner");
var bannerBox = ById("bannerBox");
var prevPosition = ById("prevPosition");

var nextPosition = ById("nextPosition");
var liList = ById("circlePoint").getElementsByTagName("li");
var aImgWidth = 790;
var animated = false;
var timer, timer2;
var index = 0;
//点击向左运动
prevPosition.onclick = function() {
	if (!animated) { //不在运动时才能再次调用
		index--;
		if (index < 0) {
			index = 4;
		}
		showButton(index);
		focusMoveOn(aImgWidth);
	}
}
//点击向右运动
nextPosition.onclick = function() {
	if (!animated) {
		index++;
		if (index > 4) {
			index = 0;
		}
		showButton(index);
		focusMoveOn(-aImgWidth);
	}
}
//点击按钮
for (var i = 0; i < liList.length; i++) {
	liList[i].onclick = function() {
		var currentIndex = this.getAttribute("index");
		if (currentIndex == index) {
			return;
		}
		var range = (index - currentIndex) * aImgWidth;
		showButton(currentIndex);
		index = currentIndex;
		focusMoveOn(range);
	}
}

bannerBox.onmouseover = stopPlay;
bannerBox.onmouseout = startPlay;
startPlay();
//开始运动
function startPlay() {
	timer2 = setInterval(function() {
		nextPosition.onclick();
	}, 3000);
}
//停止运动
function stopPlay() {
	clearInterval(timer2);
}
//小圆点按钮显示
function showButton(index) {
	for (var i = 0; i < liList.length; i++) {
		if (liList[i].className == 'active') {
			liList[i].className = '';
			break;
		}
	}
	liList[index].className = 'active';
}
//轮播图运动
function focusMoveOn(range) {
	var runTime = 200;
	var runEveryTime = 10;
	var speed = range / (runTime / runEveryTime); //每次运动距离
	var currentLeft = parseInt(imgBanner.style.left) + range; //运动的最终结果
	clearInterval(timer);
	timer = setInterval(function() {
		if ((speed < 0 && parseInt(imgBanner.style.left) > currentLeft) || (speed > 0 && parseInt(imgBanner.style.left) < currentLeft)) { // 未达到目标时
			var lastSpeed = Math.abs(currentLeft - parseInt(imgBanner.style.left));
			//解决因speed不同而可能出现的回弹效果，即最后一次加上speed超过目标值，所以对最后一次进行讨论
			if (lastSpeed < Math.abs(speed)) {
				if (speed < 0) {
					imgBanner.style.left = parseInt(imgBanner.style.left) - lastSpeed + 'px';
				} else {
					imgBanner.style.left = parseInt(imgBanner.style.left) + lastSpeed + 'px';
				}
			} else {
				imgBanner.style.left = parseInt(imgBanner.style.left) + speed + 'px';
			}
			animated = true;
		} else { //达到目标情况以后
			clearInterval(timer);
			imgBanner.style.left = currentLeft + 'px';
			if (currentLeft < -aImgWidth * 5) {
				imgBanner.style.left = -aImgWidth + 'px';
			}
			if (currentLeft > -aImgWidth) {
				imgBanner.style.left = -aImgWidth * 5 + 'px';
			}
			animated = false;
		}
	}, 10);
}*/