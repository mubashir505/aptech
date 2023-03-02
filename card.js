$(document).ready(function(){
$(".card").mouseenter(function(){
// $(".borderbox").css({"transform":"scale(1.7)","transition":"0.5s"}) 
$(this).closest(".card").find(".borderbox").css({"transform":"scale(1.7)","transition":"0.5s","border":"4px solid white"})
});
$(".card").mouseleave(function(){
    $(".borderbox").css({"transform":"scale(0)","transition":"0.5s","border":"4px solid white"}) 
    });
});
