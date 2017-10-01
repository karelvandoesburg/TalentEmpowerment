$startbutton.on('click', function(){
    $sectionwrapper.show();
    goToContextPage();
    showHomeGrid();
    changeAllImages();
});

function goToContextPage() {
    $logo.velocity({
        'top' : '-400px'
    }, {duration: 1300, easing: 'easeInOutQuart'})
    
    $start.velocity({
        'top' : '-500px'
    }, {duration: 1300, easing: 'easeInOutQuart', delay: 200})
        
    $sectionwrapper.velocity({
        'top' : '0px'
    }, {duration: 1300, easing: 'easeInOutQuart',delay: 400})
    
    setMarginTop = function(){};   
}

function showHomeGrid() {
    var dur = 800;
    var del = 1600
    var extra = 200;
    showHomePicture($homepicture1, del, dur);
    showHomePicture($homepicture3, del, dur);
    showHomePicture($homepicture5, del, dur);
    showHomePicture($homepicture6, del, dur);
}

function showFirstPicture(picture,del,dur) {
    picture.velocity({
        'opacity':'1'
    }, {duration: dur, easing: 'easeInOutSine', delay: del})
} 

function showHomePicture(picture,del,dur) {
    picture.velocity({
        'opacity':'1'
    }, {duration: dur, easing: 'swing', delay: del})
}

function showLastPicture(picture,del,dur) {
    picture.velocity({
        'opacity':'1'
    }, {duration: dur, easing: 'easeInOutQuad', delay: del})
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