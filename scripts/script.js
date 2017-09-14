//Introduction screen

//First animations
$(window).ready(function() {
    setMarginTop();
    changeButtonSize();
    changeBackgroundSize();
    backgroundAnimation();
});

var $sectionwrapper = $('#section-wrapper');
var $homewrapper = $('#home-wrapper');
var $introwrapper = $('#intro-wrapper');
var $intro = $('#intro');
var $logo = $('#intro-logo');
var $start = $('#start');
var $cover = $('#intro-cover');
var $startbutton = $('#start-button');
var $starttext = $('#start-text');
var $homelogo = $('#home-logo');
var $homepicture1 = $('#home-picture-1');
var $homepicture2 = $('#home-picture-2');
var $homepicture3 = $('#home-picture-3');
var $homepicture4 = $('#home-picture-4');
var $homepicture5 = $('#home-picture-5');
var $homepicture6 = $('#home-picture-6');
var $homepicture7 = $('#home-picture-7');
var $homepicture8 = $('#home-picture-8');
var $Road2Tokyo = $('#Road2Tokyo');

function setMarginTop() {
    $sectionwrapper.css({
        'top' : $(window).height() + 'px'
    });
}

function backgroundAnimation() {
    $cover.velocity({
        'top' : '1000px'
    }, 1500, 'easeInOutQuart')
    
    $intro.velocity({
        'top' : '0px'
    }, 1500, 'easeInOutQuart')
    
    $logo.velocity({
        'top' : '3%'
    }, {duration: 1300, easing: 'easeInOutQuart', delay: 600})
    
    $start.velocity({
        'top' : '25%'
    }, {duration: 1300, easing: 'easeInOutQuart', delay: 400})
    
    //color change $startbutton is done in CSS animations
}

//Resizing
$(window).resize(changeSize);

function changeSize() {
    changeButtonSize();
    changeBackgroundSize();
    setMarginTop();
}

function changeButtonSize() {
    var width_button = $start.width();
    var top = width_button * 0.04;
    $start.css({
        "borderWidth" : width_button * 0.014
    });
    $startbutton.css({
        "marginTop" : top + "px",
        "fontSize" : top,
        "height" : top * 1.5 + "px",
        "paddingTop" : top * 0.22
    })
    $starttext.css({
        "fontSize" : width_button * 0.23
    })
}

function changeBackgroundSize() {
    var height_picture = $(window).height();
    $('#intro-wrapper').css({"height" : height_picture});
}



//Click to go to the home page
$startbutton.on('click', function(){
    $sectionwrapper.show();
    goToContextPage();
    showHomeGrid();
});

function goToContextPage() {
    $logo.velocity({
        'top' : '-400px'
    }, {duration: 1300, easing: 'easeInOutQuart'})
    
    $start.velocity({
        'top' : '-400px'
    }, {duration: 1300, easing: 'easeInOutQuart', delay: 200})
        
    $sectionwrapper.velocity({
        'top' : '0px'
    }, {duration: 1300, easing: 'easeInOutQuart',delay: 400})
    
    setMarginTop = function(){};   
}

function showHomeGrid() {
    var dur = 500;
    var extra = 500;
    showFirstPicture($homepicture1, 1400, dur+1000);
    showHomePicture($homepicture2, 1250+extra, dur);
    showHomePicture($homepicture3, 1350+extra, dur);
    showHomePicture($homepicture4, 1400+extra, dur);
    showHomePicture($homepicture5, 1500+extra, dur+250);
    showHomePicture($homepicture6, 1300+extra, dur+150);
    showHomePicture($homepicture7, 1450+extra, dur+250);
    showLastPicture($homepicture8, 1550+extra, dur+1500);
}

function showFirstPicture(picture,del,dur) {
    picture.velocity({
        'opacity':'1'
    }, {duration: dur, easing: 'easeInOutSine', delay: del})
} 

function showHomePicture(picture,del,dur) {
    picture.velocity({
        'opacity':'1'
    }, {duration: dur, easing: 'easeOutSine', delay: del})
}

function showLastPicture(picture,del,dur) {
    picture.velocity({
        'opacity':'1'
    }, {duration: dur, easing: 'easeOutQuad', delay: del})
}

$homepicture1.on('click', function() {
    setHighZIndex($Road2Tokyo);
    showRoad2Tokyo();
})

function setHighZIndex(object) {
    object.css({'z-index':'5'})
}

function showRoad2Tokyo() {
    $Road2Tokyo.velocity({
        'opacity' : '1'
    }, {duration: 500, easing: 'swing'})
}