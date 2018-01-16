$(window).ready(function() {
    skipIntroductionPage();
    setIntroImageDimensions();
    setMarginTop();
    changeBackgroundSize();
    processMobile();
    timeoutBackgroundanimation();
    $bartextcomputer.css({'opacity' : '0'});
});

function timeoutBackgroundanimation() {
    setTimeout(function(){
        backgroundAnimation();
    }, 300);
}

function backgroundAnimation() {
    moveDownCover();
    moveDownPicture();
    moveDownLogo();
    moveDownText();
    makeMoveCover();
}

function setIntroImageDimensions() {
    changeImageDimension($intro,intropictureratio,$(window));
}

function moveDownCover() {
    $cover.velocity({
        'top' : screenHeight + 'px'
    }, 1500, 'easeInOutQuart')
}

function moveDownPicture() {
    $intro.velocity({
        'top' : '0px'
    }, 1500, 'easeInOutQuart')
}

function moveDownLogo() {
    $logo.velocity({
        'top' : '3%'
    }, {duration: 1300, easing: 'easeInOutQuart', delay: 600})
}

function moveDownText() {
    var top = $intro.height()*0.42;
    $start.velocity({
        'top' : top + 'px'
    }, {duration: 1300, easing: 'easeInOutQuart', delay: 400})
}

function makeMoveCover() {
    setTimeout(function() {
        moveCover = function() {
            $cover.css({"top":$(window).height() + 'px'});
        }
        moveStart = function() {
            $start.css({
                'top' : $intro.height()*0.42 + 'px'
            })
        }
    },1900);
}

function processMobile() {
    if(isMobileDevice()) {
        $homegrid.removeClass("computer");
        $bartextmobile.css({'opacity':'1'});
        $bartextcomputer.remove();
    }
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};