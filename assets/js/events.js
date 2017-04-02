var MENU_SHOWED = false;
var INFO_SHOWED = false;
$( document ).ready( function(){
    var images = [];
    $("#backgrounds li").each(function(){
        images.push($(this).text())
    });
    var max_image = $("#backgrounds > li").size();
    var base = $("#home");
    var n = 0;
    base.css("background-image","url('./assets/images/"+images[0]+"')");
    setInterval(function(){
        if(n == max_image)
            {
                n = 0;
            } 
        base.css("background-image","url('./assets/images/" + images[n] +"')");
        n = n + 1;
    },4000);
    var degree = 90;
    setInterval(function(){
        var elem = $("#preloader-img");
        elem.css("transform","rotate("+degree+"deg)");
        degree += 90;
    }
    ,3000);
    $( window ).load( function(){
        $("#preloader").fadeOut("slow");
        //$("#preloader").remove();
    });

    $("#menubox").on("click",function(){
        if(MENU_SHOWED == true)
            {
                MENU_SHOWED = false;
                $("#backmenu").fadeOut();
                $("#menu").fadeOut();
            } else {
                MENU_SHOWED = true;
                $("#backmenu").fadeIn();
                $("#menu").fadeIn();
            }
    });
});