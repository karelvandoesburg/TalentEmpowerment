$(window).ready(function() {
    setMarginTop();
    changeButtonSize();
    changeBackgroundSize();
    backgroundAnimation();
});

function backgroundAnimation() {
    moveDownCover();
    moveDownPicture();
    moveDownLogo();
    moveDownText();
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
    var height = $intro.height() * 0.5;
    $start.velocity({
        'top' : height + 'px'
    }, {duration: 1300, easing: 'easeInOutQuart', delay: 400})
} 