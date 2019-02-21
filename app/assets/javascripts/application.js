// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require jquery3
//= require activestorage
//= require_tree .

$("document").ready(function(){

	$("#title-message").hide();

	$(window).scroll(function() {
    $(".messages").fadeOut(800);
	  var yPos = -($(window).scrollTop()); 

	  if(yPos < -80)
	  	$("#title-message").fadeIn(800);
	  else
	  	$("#title-message").fadeOut(800);


    //Control of header while scrolls
    if(yPos < -40) {
      $("header").css("height", "60px");
      $(".banner1").css("margin-top", "100px");
      $(".banner2").css("margin-top", "100px");
      $(".banner3").css("margin-top", "100px");
      $(".header-logo").css("height", "50px");
      $(".header-logo").css("margin-top", "0px");
      $(".header-logo ul").css("margin-top", "-3px");
      $(".header-menu").css("margin-top", "4px");
      $(".header-menu ul").css("margin-top","15px");
      $(".social-media").css("margin-top", "5px");
      if($("body").width()>=600)
        $(".btn-open-menu").css("margin-top","2px");
      $(".social-media a").mouseover(function(){
        $(".social-media a").css("width", "50px");
      });
      $(".social-media a").mouseover(function(){
        $(".social-media a").css("height", "50px");
      });
      $(".social-media a").mouseover(function(){
        $(".social-media a").css("margin-top", "0px");
      });
      $(".social-media a").mouseover(function(){
        $(".social-media a").css("margin-left", "0px");
      });
      $(".social-media a").mouseover(function(){
        $(".social-media i").css("margin-top", "8px");
      });
      $(".social-media a").mouseover(function(){
        $(".social-media i").css("margin-left", "10px");
      });
      $(".header-menu li").mouseover(function(){
        $(".header-menu li").css("padding-bottom", "11px");
      });
    }
    else{
      $("header").css("height", "100px");
      $(".header-logo").css("height", "80px");
      $(".header-logo").css("margin-top", "10px");
      $(".header-logo ul").css("margin-top", "10px");
      $(".header-menu").css("margin-top", "25px");
      $(".header-menu ul").css("margin-top","13px");
      $(".social-media").css("margin-top", "25px");
      $(".btn-open-menu").css("margin-top","22px");
      $(".social-media a").mouseover(function(){
        $(".social-media a").css("width", "70px");
        $(".social-media a").css("height", "70px");
        $(".social-media a").css("margin-top", "-10px");
        $(".social-media a").css("margin-left", "-10px");
        $(".social-media i").css("margin-top", "18px");
        $(".social-media i").css("margin-left", "20px");
      });
      $(".social-media a").mouseout(function(){
        $(".social-media a").css("width", "50px");
        $(".social-media a").css("height", "50px");
        $(".social-media a").css("margin-top", "0px");
        $(".social-media a").css("margin-left", "0px");
        $(".social-media i").css("margin-top","8px");
        $(".social-media i").css("margin-left","10px");
      });
      $(".header-menu li").mouseover(function(){
        $(this).css("padding-bottom", "20px");
      });
      $(".header-menu li").mouseout(function(){
        $(this).css("padding-bottom", "11px");
      });
    }
  });

	for(i=1; i<=50; i++){
		$(".mask").append("<div class=\"mask-pixel\"></div>");
	}

	$("#youtube-link").mouseover(function(){
		$("#youtube-icon").css("margin-top","18px");
		$("#youtube-icon").css("margin-left","20px");
	});
	$("#youtube-link").mouseout(function(){
		$("#youtube-icon").css("margin-top","8px");
		$("#youtube-icon").css("margin-left","10px");
	});

  $("#instagram-link").mouseover(function(){
    $("#instagram-icon").css("margin-top","18px");
    $("#instagram-icon").css("margin-left","20px");
  });
  $("#instagram-link").mouseout(function(){
    $("#instagram-icon").css("margin-top","8px");
    $("#instagram-icon").css("margin-left","10px");
  });


	$(".mask-pixel").mouseenter(function(){
		$(this).css("opacity","0");
	});
	$(".galery-photo").mouseover(function(){
		$(this).css("filter","grayscale(0%)");
	});
	$(".galery-photo").mouseout(function(){
		$(this).css("filter","grayscale(100%)");
	});


	//Controling the audio files and page

	$(".lyrics").hide();

	function hideLyrics() {
		$("#lyric1").fadeOut(100);
		$("#lyric2").fadeOut(100);
		$("#lyric3").fadeOut(100);
		$("#lyric4").fadeOut(100);
		$("#lyric5").fadeOut(100);
		$("#lyric6").fadeOut(100);
	}


	var body_width = $("body").width();

	//MUSICA 1
	var player1 = document.getElementById("audio1");
	//MOSTRAR LETRA
  	player1.addEventListener("play", function () {
      if(body_width >= 600) {
        hideLyrics();
        $(".icon").fadeOut(800);
        $("#lyric1").fadeIn(800);
        $(".songs-control").css("width", "45%");
        $(".song-file").css("left", "5%");
        $(".song-file").css("width", "90%"); 
      }
  	});
  	//ESCONDER LETRA
  	player1.addEventListener("pause", function () {
      if(body_width >= 600) {
        $("#lyric1").fadeOut(800);
        $(".icon").fadeIn(800);
        $(".songs-control").css("width", "100%");
        $(".song-file").css("left", "25%");
        $(".song-file").css("width", "50%");
      }
  	});

  	//MUSICA 2
  	var player2 = document.getElementById("audio2");
  	//MOSTRAR LETRA
  	player2.addEventListener("play", function () {
      if(body_width >= 600) {
    		hideLyrics();
        $(".icon").fadeOut(800);
    		$("#lyric2").fadeIn(800);
      	$(".songs-control").css("width", "45%");
      	$(".song-file").css("left", "5%");
      	$(".song-file").css("width", "90%");
      }
  	});
  	//ESCONDER LETRA
  	player2.addEventListener("pause", function () {
      if(body_width >= 600) {
  		  $("#lyric2").fadeOut(800);
        $(".icon").fadeIn(800);
      	$(".songs-control").css("width", "100%");
      	$(".song-file").css("left", "25%");
      	$(".song-file").css("width", "50%");
      }
  	});

  	//MUSICA 3
  	var player3 = document.getElementById("audio3");
  	//MOSTRAR LETRA
  	player3.addEventListener("play", function () {
  		if(body_width >= 600) {
        hideLyrics();
        $(".icon").fadeOut(800);
  		  $("#lyric3").fadeIn(800);
      	$(".songs-control").css("width", "45%");
      	$(".song-file").css("left", "5%");
      	$(".song-file").css("width", "90%");
  	  }
    });
  	//ESCONDER LETRA
  	player3.addEventListener("pause", function () {
  		if(body_width >= 600) {
        $("#lyric3").fadeOut(800);
        $(".icon").fadeIn(800);
      	$(".songs-control").css("width", "100%");
      	$(".song-file").css("left", "25%");
      	$(".song-file").css("width", "50%");
      }
  	});

  	//MUSICA 4
  	var player4 = document.getElementById("audio4");
  	//MOSTRAR LETRA
  	player4.addEventListener("play", function () {
  		if(body_width >= 600) {
        hideLyrics();
        $(".icon").fadeOut(800);
  		  $("#lyric4").fadeIn(800);
      	$(".songs-control").css("width", "45%");
      	$(".song-file").css("left", "5%");
      	$(".song-file").css("width", "90%");
      }
  	});
  	//ESCONDER LETRA
  	player4.addEventListener("pause", function () {
  		if(body_width >= 600) {
        $("#lyric4").fadeOut(800);
        $(".icon").fadeIn(800);
      	$(".songs-control").css("width", "100%");
      	$(".song-file").css("left", "25%");
      	$(".song-file").css("width", "50%");
      }
  	});

  	//MUSICA 5
  	var player5 = document.getElementById("audio5");
  	//MOSTRAR LETRA
  	player5.addEventListener("play", function () {
  		if(body_width >= 600) {
        hideLyrics();
        $(".icon").fadeOut(800);
  		  $("#lyric5").fadeIn(800);
      	$(".songs-control").css("width", "45%");
      	$(".song-file").css("left", "5%");
      	$(".song-file").css("width", "90%");
      }
  	});
  	//ESCONDER LETRA
  	player5.addEventListener("pause", function () {
      if(body_width >= 600) {
        $("#lyric5").fadeOut(800);
        $(".icon").fadeIn(800);
      	$(".songs-control").css("width", "100%");
      	$(".song-file").css("left", "25%");
      	$(".song-file").css("width", "50%");
      }
  	});

  	//MUSICA 6
  	var player6 = document.getElementById("audio6");
  	//MOSTRAR LETRA
  	player6.addEventListener("play", function () {
  		if(body_width >= 600) {
        hideLyrics();
        $(".icon").fadeOut(800);
  		  $("#lyric6").fadeIn(800);
      	$(".songs-control").css("width", "45%");
      	$(".song-file").css("left", "5%");
      	$(".song-file").css("width", "90%");
      }
  	});
  	//ESCONDER LETRA
  	player6.addEventListener("pause", function () {
  		if(body_width >= 600) {
        $("#lyric6").fadeOut(800);
        $(".icon").fadeIn(800);
      	$(".songs-control").css("width", "100%");
      	$(".song-file").css("left", "25%");
      	$(".song-file").css("width", "50%");
      }
  	});

  	$(".p-lyric").mouseover(function(){
  		$(this).css("text-shadow","1px 1px #21252A");
  	});	
  	$(".p-lyric").mouseout(function(){
  		$(this).css("text-shadow","none");
  	});	


  	$(".place").hide();

  	$(".date").click(function(){
  		$(this).css("height", "355px");
  		var classe = $(this);
  		setTimeout(function(){
  			classe.children("h3").fadeIn(800);
  		},600);
  	});


    //PARALLAX EFFECTS

    /*function incrementa(e,layer) {
      var i_layer = $(e).css("margin-top");
      i_layer.replace("px","");
      i_layer = parseInt(i_layer);
      if(layer == 1) {
        i_layer = i_layer - 0.5;
      }
      else if (layer == 2) {
        i_layer = i_layer - 1;
      }
      else {
        i_layer = i_layer - 1.5;
      }
      $(e).css("margin-top",i_layer+"px");
    }
    
    function decrementa(e,layer) {
      var i_layer = $(e).css("margin-top");
      i_layer.replace("px","");
      i_layer = parseInt(i_layer);
      if(layer == 1) {
        i_layer = i_layer + 1;
      }
      else if (layer == 2) {
        i_layer = i_layer + 2;
      }
      else {
        i_layer = i_layer + 3;
      }
      $(e).css("margin-top",i_layer+"px");
    }
    
    var scrollAnt=0;

    $(window).scroll(function() {
      scrollAt = -($(window).scrollTop());
      var yPos = -($(window).scrollTop());
      if(yPos < -2600) {
        if(scrollAt < scrollAnt) {
          incrementa("#music1",1);
          incrementa("#music2",1);
          incrementa("#music3",1);
          incrementa("#music4",1);
          incrementa("#music5",1);
          incrementa("#music6",1);
          incrementa("#music7",1);
          incrementa("#music8",1);
          
          incrementa("#play1",2);
          incrementa("#play2",2);
          incrementa("#play3",2);
          incrementa("#play4",2);
          incrementa("#play5",2);
          incrementa("#play6",2);
          incrementa("#play7",2);
          
          incrementa("#head1",3);
          incrementa("#head2",3);
          incrementa("#head3",3);
          incrementa("#head4",3);
          incrementa("#head5",3);
          incrementa("#head6",3);
          incrementa("#head7",3);
          incrementa("#head8",3);
          scrollAnt = scrollAt;
        }
        else {
          decrementa("#music1",1);
          decrementa("#music2",1);
          decrementa("#music3",1);
          decrementa("#music4",1);
          decrementa("#music5",1);
          decrementa("#music6",1);
          decrementa("#music7",1);
          decrementa("#music8",1);

          decrementa("#play1",2);
          decrementa("#play2",2);
          decrementa("#play3",2);
          decrementa("#play4",2);
          decrementa("#play5",2);
          decrementa("#play6",2);
          decrementa("#play7",2);
          
          decrementa("#head1",3);
          decrementa("#head2",3);
          decrementa("#head3",3);
          decrementa("#head4",3);
          decrementa("#head5",3);
          decrementa("#head6",3);
          decrementa("#head7",3);
          decrementa("#head8",3);
          scrollAnt = scrollAt;
        }
      }
      else {
          $("#music1").css("margin-top","50px");
          $("#music2").css("margin-top","120px");
          $("#music3").css("margin-top","500px");
          $("#music4").css("margin-top","700px");
          $("#music5").css("margin-top","900px");
          $("#music6").css("margin-top","800px");
          $("#music7").css("margin-top","920px");
          $("#music8").css("margin-top","750px");

          $("#play1").css("margin-top","150px");
          $("#play2").css("margin-top","60px");
          $("#play3").css("margin-top","750px");
          $("#play4").css("margin-top","400px");
          $("#play5").css("margin-top","300px");
          $("#play6").css("margin-top","800px");
          $("#play7").css("margin-top","900px");
          
          $("#head1").css("margin-top","330px");
          $("#head2").css("margin-top","260px");
          $("#head3").css("margin-top","550px");
          $("#head4").css("margin-top","660px");
          $("#head5").css("margin-top","870px");
          $("#head6").css("margin-top","920px");
          $("#head7").css("margin-top","880px");
          $("#head8").css("margin-top","820px");
      }

    });   */


    //MOBILE EFFECTS

    var open=0;
    $(".btn-open-menu").click(function(){
      
      if(open==0) open=1;
      else open = 0;

      var width = $('body').width();

      if(width >= 600) {
        var margin_mask = $(".mobile-mask").css("margin-top");
        if(margin_mask=="-2000px") {
          var y_Pos = -($(window).scrollTop()); 
          $(".mobile-mask").css("margin-top","0px");
          if(y_Pos<-40)
            $(".menu-mobile").css("margin-top", "60px");
          else
            $(".menu-mobile").css("margin-top", "100px");
        }
        else {
          $(".mobile-mask").css("margin-top","-2000px");
          $(".menu-mobile").css("margin-top","-2000px");
        }
      }
      else {
        var margin_mask = $(".mobile-mask").css("margin-top");
        if(margin_mask=="-2000px") {
          $(".mobile-mask").css("margin-top","0px");
          $(".menu-mobile").css("margin-top", "60px");
        }
        else {
          $(".mobile-mask").css("margin-top","-2000px");
          $(".menu-mobile").css("margin-top","-2000px");
        }
      }
       
    });

    $(window).scroll(function() {
      var y_Pos = -($(window).scrollTop()); 
      if(open==1) {
        if(y_Pos<-40)
          $(".menu-mobile").css("margin-top", "60px");
        else
          $(".menu-mobile").css("margin-top", "100px"); 
      }
    });
    $(".button-mobile").click(function(){
      open=0;
      $(".mobile-mask").css("margin-top","-2000px");
      $(".menu-mobile").css("margin-top","-2000px");
    });
    $(".mobile-mask").click(function(){
      open=0;
      $(".mobile-mask").css("margin-top","-2000px");
      $(".menu-mobile").css("margin-top","-2000px");
    });

    //MOBILE EFECTS

    var lyric_open = 0;

    $("#show-song1").click(function(){
      if (lyric_open == 0) {
        lyric_open = 1;
        $("#show-song1").html("Esconder Letra");
        $("#lyric1").fadeIn(800);
      } 
      else {
        lyric_open = 0;
        $("#show-song1").html("Mostrar Letra");
        $("#lyric1").fadeOut(800);
      }
    });

    $("#show-song2").click(function(){
      if (lyric_open == 0) {
        lyric_open = 1;
        $("#show-song2").html("Esconder Letra");
        $("#lyric2").fadeIn(800);
      } 
      else {
        lyric_open = 0;
        $("#show-song2").html("Mostrar Letra");
        $("#lyric2").fadeOut(800);
      }
    });

    $("#show-song3").click(function(){
      if (lyric_open == 0) {
        lyric_open = 1;
        $("#show-song3").html("Esconder Letra");
        $("#lyric3").fadeIn(800);
      } 
      else {
        lyric_open = 0;
        $("#show-song3").html("Mostrar Letra");
        $("#lyric3").fadeOut(800);
      }
    });
    $("#show-song4").click(function(){
      if (lyric_open == 0) {
        lyric_open = 1;
        $("#show-song4").html("Esconder Letra");
        $("#lyric4").fadeIn(800);
      } 
      else {
        lyric_open = 0;
        $("#show-song4").html("Mostrar Letra");
        $("#lyric4").fadeOut(800);
      }
    });
    $("#show-song5").click(function(){
      if (lyric_open == 0) {
        lyric_open = 1;
        $("#show-song5").html("Esconder Letra");
        $("#lyric5").fadeIn(800);
      } 
      else {
        lyric_open = 0;
        $("#show-song5").html("Mostrar Letra");
        $("#lyric5").fadeOut(800);
      }
    });
    $("#show-song6").click(function(){
      if (lyric_open == 0) {
        lyric_open = 1;
        $("#show-song6").html("Esconder Letra");
        $("#lyric6").fadeIn(800);
      } 
      else {
        lyric_open = 0;
        $("#show-song6").html("Mostrar Letra");
        $("#lyric6").fadeOut(800);
      }
    });
});
