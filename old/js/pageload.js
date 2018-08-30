window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
/* *************************
Welcomeboard Animation and Message Selection */
var welcomeArray = new Array("Hello World", "Welcome", "Greetings", ".(^ _ ^)/");
var welcomeBoard = new Writer($("#welcomeBoardText"), $("#welcomeBoardCursor"), $("#welcomeBoardMark"), 100, false, false, 0);
welcomeBoard.setCursor("|");
welcomeBoard.setMark(">");
setInterval(function(){
    welcomeBoard.animateCursor(600);
}, 600);
setTimeout(function(){
    welcomeBoard.write(welcomeArray[Math.floor(Math.random()*welcomeArray.length)], 0);
}, 1000);
/* *************************
Fade in Page Content, Typewriter Section Titles */
setTimeout(function(){
    $(".primary-fade").animate({
        opacity:1
    }, 1000, "linear");
        Writer($("#about"), $(""), $(""), (1500/5), false, false, 0).write(""+$("#about").text(), 1);
        Writer($("#resume"), $(""), $(""), (1500/6), false, false, 0).write(""+$("#resume").text(), 1);
        Writer($("#work"), $(""), $(""), (1500/4), false, false, 0).write($(""+"#work").text(), 1);
        Writer($("#contact"), $(""), $(""), (1500/7), false, false, 0).write($(""+"#contact").text(), 1);
        Writer($("#section-title"), $(""), $(""), (1500/13), false, false, 0).write($("#section-title").text(), 2);
}, 3000);
/* *************************
Fade in Project Grid */
setTimeout(function(){
    $(".project-block").each(function(index){
        $(this).delay(800*index).animate({
            opacity:1
        }, 800, "linear");
    })
}, 5000);
/* *************************
Animate Sprites */ //THIS CODE ONLY WORKS ON ITEMS THAT ARE LOADED WHEN THE PAGE LOADS, IT WILL NOT ANIMATE ON THE CASE STUDY when tested
var leftMargin = new Animator($("#left-margin"), 108, 196, 22, 40, 2000);
var aboutSprite = new Animator($("#mobilemenu-about"), 64, 64, 58, 140, 0);

leftMargin.run();
aboutSprite.run();

