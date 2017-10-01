//Resizing
$(window).resize(changeSize);

function changeSize() {
    changeButtonSize();
    changeBackgroundSize();
    setMarginTop();
    changeAllImageDimensions();
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

function changeAllImageDimensions() {
    changeImageDimension($photo1,picture1ratio,$homepicture1);
    changeImageDimension($photo2,picture2ratio,$homepicture3);
    changeImageDimension($photo3,picture3ratio,$homepicture5);
    changeImageDimension($photo4,picture4ratio,$homepicture6);
}

function changeImageDimension(image,ratio,pictureContainer) {
    var containerratio = pictureContainer.width()/pictureContainer.height();
    if(ratio > containerratio) {
        image.css({'height' : pictureContainer.height() + 'px'})
    }
    else {
        image.css({'width' : pictureContainer.width()})
    }
}

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