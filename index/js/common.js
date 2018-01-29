// 置顶 jq

function moveToTop(){
	var toTop = $("#toTop");
	toTop.on('click',function(){
		$("html,body").animate({"scrollTop":0},"fast");
	})
	showHideToTop();
	$(window).scroll(function(){
		showHideToTop();
	})
}

function showHideToTop(){
	if ($(window).scrollTop()>100) {
		toTop.show();
	}else{
		toTop.hide();
	}
}
//置顶js
// /*window.onload = function(){
// 	var toTop = document.getElementById("toTop");
// 	var timer = null;
// 	/*toTop.onclick=function(){
// 		clearInterval(timer);
// 		timer = setInterval(() => {
// 		  // Todo...
// 		  var scrollTopVal = document.body.scrollTop || document.documentElement.scrollTop;
// 		  if (scrollTopVal>0) {
// 		  	document.body.scrollTop = document.documentElement.scrollTop = scrollTopVal - 50;

// 		  }else{
// 		  	clearInterval(timer);

// 		  }
// 		}, 10);
// 	}*/
// 	toTop.onclick = function(){
// 		clearTimeout(timer);
// 		timer = setTimeout(function fn() {
// 		  // Todo...
// 		  var scrollTopVal = document.body.scrollTop || document.documentElement.scrollTop;
// 		  if (scrollTopVal>0) {
// 		  	document.body.scrollTop = document.documentElement.scrollTop = scrollTopVal - 50;
// 		  	timer = setTimeout(fn,10);
// 		  }else{
// 		  	clearInterval(timer);
// 		  }
// 		}, 10)
// 	}
// 	/*toTop.onclick = function(){
// 		cancelAnimationFrame(timer);
// 		timer = requestAnimationFrame(function fn(){
// 			var scrollTopVal = document.body.scrollTop || document.documentElement.scrollTop;
// 			if (scrollTopVal > 0) {
// 				document.body.scrollTop = document.documentElement.scrollTop = scrollTopVal - 50;
// 				timer = requestAnimationFrame(fn);
// 			}else{
// 				cancelAnimationFrame(timer);
// 			}
// 		})
// 	}*/
// 	showHideToTop();
// 	function showHideToTop(){
// 		var scrollTopVal = document.body.scrollTop || document.documentElement.scrollTop;
// 		if (scrollTopVal>100) {
// 			toTop.style.display="block";
// 		}else{
// 			toTop.style.display = "none";
// 		}
// 	}
// 	document.onscroll = function(){
// 		showHideToTop();
// 	}
// }*/

// 弹出提示框
function showMask(type,mes){
	var timer = null;
	var oDiv = $('<div class="mask"><div class="maskContent"><i></i><span></span></div></div>');
	$("body").append(oDiv);
	var documentHeight = $(document).height();
	$(".mask").css("height",documentHeight);
	if (type == 'warning') {
		$('.maskContent i').addClass('icon1');
	}
	else if (type == 'success') {
		$('.maskContent i').addClass('icon2');
	}
	else if (type == 'error') {
		$('.maskContent i').addClass('icon3');
	}
	$('.maskContent span').text(mes);
	oDiv.fadeIn();
	timer = setTimeout(() => {
		oDiv.remove();
	}, 1200);
}