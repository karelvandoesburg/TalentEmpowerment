$startbutton.on('click', function(){
    $sectionwrapper.show();
    goToContextPage();
    showHomeGrid();
    placeAllImagesInCenter();
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

//$homepicture1.on('click', function() {
//    setHighZIndex($Road2Tokyo);
//    showRoad2Tokyo();
//})

function setHighZIndex(object) {
    object.css({'z-index':'5'})
}

function showRoad2Tokyo() {
    $Road2Tokyo.velocity({
        'opacity' : '1'
    }, {duration: 500, easing: 'swing'})
}