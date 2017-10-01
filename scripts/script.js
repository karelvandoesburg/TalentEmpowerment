//Resizing
$(window).resize(changeSize);

function changeSize() {
    changeButtonSize();
    changeBackgroundSize();
    setMarginTop();
    placeAllImagesInCenter();
}

function setMarginTop() {
    $sectionwrapper.css({
        'top' : screenHeight + 'px'
    });
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

function changeButtonHeight() {
    var height = $intro.height();
    $startbutton.css({
        'marginTop' : height 
    })
}

function changeBackgroundSize() {
    var height_picture = $(window).height();
    $('#intro-wrapper').css({"height" : height_picture});
}

//function changeImageDimension(image,ratio,pictureContainer) {
//    var containerratio = pictureContainer.width/picturecontainer.height;
//    if()
//}

function placeAllImagesInCenter() {
    placeImageInCenter($photo1,$homepicture1);
    placeImageInCenter($photo2,$homepicture3);
    placeImageInCenter($photo3,$homepicture5);
    placeImageInCenter($photo4,$homepicture6);
}

function placeImageInCenter(image,pictureContainer) {
    var margintop = (pictureContainer.height()-image.height())/2;
    var marginleft = (pictureContainer.width()-image.width())/2;
    image.css({
        'top' : margintop + 'px',
        'left' : marginleft + 'px'
    })
}