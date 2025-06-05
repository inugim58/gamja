$("nav").hover(
    function() {
        $(".submenu").slideDown("slow");
        $(".menubg").slideDown("slow");
    },
    function() {
        $(".submenu").slideUp("slow")
        $(".menubg").slideUp("slow")
    }
);
var slider = $(".slide a");
var sno = 0;
function playSlide(){
    $(slider[sno]).animate( {left:"100%"},2000,
    function() { $(this).css({left:"-100%"});
});
sno++;
if(sno>2) sno=0;
$(slider[sno]).animate({left:"0"},2000);
}
setInterval(playSlide,4000);

function openPop() {
    $(".pop").show();
}
function closePop() {
    $(".pop").hide();
}
