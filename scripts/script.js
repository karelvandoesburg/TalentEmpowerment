//Resizing
$(window).resize(changeSize);

function changeSize() {
    changeButtonSize();
    changeBackgroundSize();
    setMarginTop();
    changeAllImages();
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

function changeAllImages() {
    changeImage($photo1,picture1ratio,$homepicture1);
    changeImage($photo2,picture2ratio,$homepicture3);
    changeImage($photo3,picture3ratio,$homepicture5);
    changeImage($photo4,picture4ratio,$homepicture6);
}

function changeImage(image,ratio,pictureContainer) {
    var width = calculateImageWidth(image,ratio,pictureContainer);
    var height = calculateImageHeight(image,ratio,pictureContainer);
    changeImageDimension(image,ratio,pictureContainer);
    placeImageInCenter(image,pictureContainer,width,height);
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
        image.css({
            'height' : pictureContainer.height() + 'px',
            'width' : 'auto'
        })
    }
    else {
        image.css({
            'width' : pictureContainer.width() + 'px',
            'height' : 'auto'
        })
    }
}

function placeAllImagesInCenter() {
    placeImageInCenter($photo1,picture1ratio,$homepicture1);
    placeImageInCenter($photo2,picture2ratio,$homepicture3);
    placeImageInCenter($photo3,picture3ratio,$homepicture5);
    placeImageInCenter($photo4,picture4ratio,$homepicture6);
}

function placeImageInCenter(image,pictureContainer,width,height) {
    var margintop = (pictureContainer.height()-height)/2;
    var marginleft = (pictureContainer.width()-width)/2;
    image.css({
        'top' : margintop + 'px',
        'left' : marginleft + 'px'
    })
}

function calculateImageHeight(image, ratio, pictureContainer) {
    var containerratio = pictureContainer.width()/pictureContainer.height();
    var height;
    if(ratio > containerratio) {
        height = pictureContainer.height();
    }
    else {
        height = pictureContainer.width() / ratio;
    }
    return height;
}

function calculateImageWidth(image, ratio, pictureContainer) {
    var containerratio = pictureContainer.width()/pictureContainer.height();
    var width;
    if(ratio > containerratio) {
        width = pictureContainer.height() * ratio;
    }
    else {
        width = pictureContainer.width();
    }
    return width;
}