/**
 * Loads HTML information to the #case-study element. Animates change of #study-body element or appearance of #case-study element.
 * @param String file - The id of the file being loaded.
 */
function loadCase(file){
    var study = $("#case-study");
    var body = $("#study-body");
    if(study.css("display") == "block"){
        body.fadeOut(500, "swing", function(){
            study.scrollTop(0);
            body.load("dir/"+file+".html");
        });
        body.fadeIn(500, "swing");
    } else {
        body.load("dir/"+file+".html");
        study.slideDown(500, "swing");
        setTimeout(function(){
            $("#close-study").slideDown(500, "swing");
        }, 500);
        study.scrollTop(0);
    }
}
/* *************************
Fade In/Out Case Study */
$(".load-case").on("click tap", function(){
    loadCase($(this).attr("id"));
    var mobile = $("#mobilenav").css("display");
    if(mobile == "none"){
        $("#case-study").css("top", "110px");
    }
});
$("#close-study").on("click tap", function(){
    $("#close-study").fadeOut(250, "swing");
    $("#case-study").slideUp(500, "swing");
});
/* *************************
Mobile Menu */
$("#mobilenav-button").on("click tap", function(){
    if($("#mobilenav-bar").css("top") == "0px"){
        $("#mobilenav-bar").animate({
            top:"60px"
        }, 500, "swing");
        $("#mobilenav-menu").animate({
            top:"0px"
        }, 500, "swing");
        $("#case-study").animate({
            top:"110px"
        }, 500, "swing")
    } else {
        $("#mobilenav-bar").animate({
            top:"0px"
        }, 500, "swing");
        $("#mobilenav-menu").animate({
            top:"-60px"
        }, 500, "swing");
        $("#case-study").animate({
            top:"50px"
        }, 500, "swing")
    }
});
/* *************************
Animate Underline of Nav-Links on Hover */
$(".topnav-link").hover(function(){
    var id = $(this).attr("id");
    if($("#"+id+"-underline").css("text-align") == "right"){
        $("#"+id+"-underline").animate({
            width:"0%",
            marginLeft:"100%"
        }, 300, "swing", function(){
            $("#"+id+"-underline").css("borderBottomColor", "#0099FF");
            $("#"+id+"-underline").animate({
                width:"100%",
                marginLeft:"0%"
            }, 300, "swing");
        });
    } else {
        $("#"+id+"-underline").animate({
            width:"0%"
        }, 300, "swing", function(){
            $("#"+id+"-underline").css("borderBottomColor", "#0099FF");
            $("#"+id+"-underline").animate({
                width:"100%",
            }, 300, "swing");
        })
    }
}, function(){
    var id = $(this).attr("id");
    if($("#"+id+"-underline").css("text-align") == "right"){
        $("#"+id+"-underline").animate({
            width:"0%",
            marginLeft:"100%"
        }, 100, "swing", function(){
            $("#"+id+"-underline").css("borderBottomColor", "#000000");
            $("#"+id+"-underline").animate({
                width:"100%",
                marginLeft:"0%"
            }, 300, "swing");
        });
    } else {
        $("#"+id+"-underline").animate({
            width:"0%"
        }, 100, "swing", function(){
            $("#"+id+"-underline").css("borderBottomColor", "#000000");
            $("#"+id+"-underline").animate({
                width:"100%",
            }, 300, "swing");
        })
    }
});