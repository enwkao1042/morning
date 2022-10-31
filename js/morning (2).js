$(document).ready(function(){
	alert("33333");
	//상단메뉴 마우스오버시_ 각항목별 하위메뉴 슬라이드
	$(".mainMenu").mouseenter(function(){
		$(".mainMenu").stop().removeClass("active");
		$("#white").stop().animate({height:"80px"});
		//위로 서서히 올라간 후 {display:none;}
		//$(".subMenu").stop().slideUp();
		//그것(마우스갖대댄거)의 다음요소
		$(.subMenu).stop().slideDown();
	});

	
	/*하위메뉴 마우스아웃시_ 올라간다*/
	$("header>nav").mouseleave(function(){
		$("mainMenu").removeClass("active");
		$("#white").stop().animate({height : 0});
		$(".subMenu").stop().slideUp();
	});
	
	
	
	//왼쪽방향 자동 슬라이드
	setInterval(leftMove, 2000);
	function leftMove(){
		$("#sliding div").stop().animate({left:"-1100px"}, 1000,function(){
			$(this).append( $(this).children().first() );
			$(this).css("left" , 0);
		});		
	}
	
	//공지사항 보이기
	$(".show").click(function(){
		$("#popup").fadeIn();
	});
	
	//공지사항 닫기
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
		
		
});////////////////마지막 부분







