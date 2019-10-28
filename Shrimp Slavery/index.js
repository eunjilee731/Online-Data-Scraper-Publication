// activate the navigation links
$(".navigation a").click(function(){

	console.log("clicked: " + $(this).attr('id'));

	showContent($(this).attr('id'))
});

function showContent(id) {
	// hide all content sections
	// $(".portfolio-item").hide();

    //console.log( $("#content-" + id).offset().top )
	// show the one with  content-[id]
	$("#body-" + id).show();

    /* BVB fixed this scroll */
	$([document.documentElement, document.body]).animate({
        scrollTop: $("#body-" + id).offset().top-100},
			 'slow');


}

/*  BVB added this script that listens to the scroll event
    when the document scroll position is below 800px the logo gets hidden
*/
$(window).on("scroll",function(e){
    //console.log($(window).scrollTop())

    if ($(window).scrollTop() < 0) {
        // hide the logo
        $(".logo").hide();
    }
    else {
        // show the logo
        $(".logo").show();
    }
});

$(document).ready(function(){
  $("#shrimp1").click(function(){
    $("#shrimp1").hide();
  });
	$("#shrimp2").click(function(){
		$("#shrimp2").hide();
	});
	$("#shrimp3").click(function(){
		$("#shrimp3").hide();
	});
	$("#shrimp4").click(function(){
		$("#shrimp4").hide();
	});
	$("#shrimp5").click(function(){
		$("#shrimp5").hide();
	});
	$("#shrimp6").click(function(){
		$("#shrimp6").hide();
	});
	$("#shrimp7").click(function(){
		$("#shrimp7").hide();
	});
	$("#shrimp8").click(function(){
		$("#shrimp8").hide();
	});
	$("#shrimp9").click(function(){
		$("#shrimp9").hide();
	});
	$("#shrimp10").click(function(){
		$("#shrimp10").hide();
	});
	$("#shrimp11").click(function(){
		$("#shrimp11").hide();
	});
	$("#shrimp12").click(function(){
		$("#shrimp12").hide();
	});
	$("#shrimp13").click(function(){
		$("#shrimp13").hide();
	});
	$("#shrimp14").click(function(){
		$("#shrimp14").hide();
	});
	$("#shrimp15").click(function(){
		$("#shrimp15").hide();
	});
	$("#shrimp16").click(function(){
		$("#shrimp16").hide();
	});
	$("#shrimp17").click(function(){
		$("#shrimp17").hide();
	});
	$("#shrimp18").click(function(){
		$("#shrimp18").hide();
	});
	$("#shrimp19").click(function(){
		$("#shrimp19").hide();
	});
	$("#shrimp20").click(function(){
		$("#shrimp20").hide();
	});
	$("#shrimp21").click(function(){
		$("#shrimp21").hide();
	});
	$("#shrimp22").click(function(){
		$("#shrimp22").hide();
	});
	$("#shrimp23").click(function(){
		$("#shrimp23").hide();
	});
	$("#shrimp24").click(function(){
		$("#shrimp24").hide();
	});
});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* BVB removed scroll, it does not do anything */
//function scrollTo(hash) {
//    location.hash = "#" + hash;
//}

// show the first content section
showContent('Home');
