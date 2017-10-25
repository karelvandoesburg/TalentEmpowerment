$startbutton.on('click', function(){
    $sectionwrapper.show();
    goToContextPage();
    showHomeGrid();
    changeAllImages();
    setContextHeight();
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
    showHomePicture($bartext, del, dur);
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

$close.on('click', function() {
    hideContext();  
})

$homepicture1.on('click', function() {
    showContext($voortopsporters);
})

$homepicture3.on('click', function() {
    showContext($doortopstudenten);
})

$homepicture5.on('click', function() {
    showContext($joinourteam);
})

$homepicture6.on('click', function() {
    showContext($partners);
})

function showContext(picture) {
    setInformationHeight(picture);
    picture.css({'opacity' : '1'});
    $context.css({'zIndex' : '5',});
    picture.css({'zIndex' : '5',});
    $shield.css({'zIndex' : '4'})
    $context.velocity({
        'opacity' : '1'
    }, {duration: 200, easing: 'swing', delay:30})
    $homegrid.addClass('blur');
    $bar.addClass('blur');
}

function hideContext() {
    $shield.css({'zIndex' : '-1'});
    $homegrid.removeClass('blur');
    $bar.removeClass('blur');
    $context.velocity({
        'opacity' : '0'
    }, {duration: 200, easing: 'swing'})
    setTimeout(function() {
        $context.css({'zIndex' : '-1'})},200);
    setTimeout(hideAllChapters(), 200);
    setTimeout(function() {
        $voortopsporters.css({'opacity' : '0'})},200);
    setTimeout(function() {
        $doortopstudenten.css({'opacity' : '0'})},200);
    setTimeout(function() {
        $joinourteam.css({'opacity' : '0'})},200);
    setTimeout(function() {
        $partners.css({'opacity' : '0'})},200);  
}

function hideAllChapters() {
    $voortopsporters.css({'zIndex' : '-1',});
    $doortopstudenten.css({'zIndex' : '-1',});
    $joinourteam.css({'zIndex' : '-1',});
    $partners.css({'zIndex' : '-1',});
}