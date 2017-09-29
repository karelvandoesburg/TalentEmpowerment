$(window).ready(function() {
    setMarginTop();
    changeButtonSize();
    changeBackgroundSize();
    backgroundAnimation();
});

function backgroundAnimation() {
    $cover.velocity({
        'top' : screenHeight + 'px'
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