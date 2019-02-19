$("document").ready(function(){
	$(".banner2").hide();
  	$(".banner3").hide();

	var img=1;
	setInterval(function(){
		switch(img) {
			case 1:
				img=2;
				$(".banner1").fadeOut(1600, function(){
          			$(".banner2").fadeIn(1600);
				});
			break;
			case 2:
				img=3;
				$(".banner2").fadeOut(1600, function(){
					$(".banner3").fadeIn(1600);
				});
			break;
			case 3:
				img=1;
				$(".banner3").fadeOut(1600, function(){
					$(".banner1").fadeIn(1600);
				});
			break;
		}
	}, 5000);

});
