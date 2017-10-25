//Resizing
$(window).resize(changeSize);

function changeSize() {
    changeBackgroundSize();
    setMarginTop();
    changeAllImages();
    setStartButtonMargin();
    setContextHeight();
    setInformationHeight($voortopsporters);
    setChapterMaxHeight();
    skipIntroductionPage();
}

function setContextHeight() {
    $context.height($(window).height()-60);
}

function setChapterMaxHeight() {
    var maxheight = $(window).height()-200;
    $chapter.css({"maxHeight" : maxheight + 'px'});
    $chapter.css({"height" : maxheight + 'px'});
}

function setInformationHeight(information) {
    information.height($(window).height()-200);
}

function setMarginTop() {
    $sectionwrapper.css({
        'top' : screenHeight + 'px'
    });
}

function setStartButtonMargin() {
    var height = getCorrectHeight();
    var top = height*0.60-173;
    $start.css({'top' : top + 'px'});
}

function getCorrectHeight() {
    var window = $(window).height();
    var background = $intro.height();
    if(window < background) {return window;}
    else{return background;}
}

function getCorrectWidth() {
    var window = $(window).width();
    var background = $intro.width();
    if(window < background) {return window;}
    else{return background;}
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
        var height = pictureContainer.height();
        var width = ratio*height;
        image.css({
            'height' : height + 'px',
            'width' : width + 'px'
        })
    }
    else {
        var width = pictureContainer.width();
        var height = width/ratio;
        image.css({
            'width' : width + 'px',
            'height' : height + 'px'
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