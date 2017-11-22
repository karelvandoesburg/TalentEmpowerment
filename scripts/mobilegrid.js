function skipIntroductionPage(){
    if($(window).width() < 1000) {
        $sectionwrapper.show();
        $logo.css({'top' : '-400px'});
        $start.css({'top' : '-500px'});
        $sectionwrapper.css({'top' : '0px'});
        setMarginTop = function(){};
        $homepicture1.css({"opacity" : "1"});
        $homepicture3.css({"opacity" : "1"});
        $homepicture5.css({"opacity" : "1"});
        $homepicture6.css({"opacity" : "1"});
        $bar.css({"opacity" : "1"});
        $barlogo.css({"opacity" : "1"});
        setContextHeight();
        buildMobileGrid();
        changeAllImages();
    }
}

function buildMobileGrid() {
    var width = $(window).width();
    if(width < 1000) {
        var bigheight = BGratio * width;
        var smallheight = SGratio * width;
        var barheight = $bar.height();
        $homepicture1.css({"height" : bigheight + "px"});
        $homepicture3.css({"height" : bigheight + "px"});
        $homepicture5.css({"height" : smallheight + "px"});
        $homepicture6.css({"height" : smallheight + "px"});
        var sectionheight = 2*bigheight + 2*smallheight + barheight;
        $sectionwrapper.css({"height" : sectionheight+'px'});
        hideContext();
    } 
}

function getNormalContainer() {
    if($(window).width() > 999) {
        $sectionwrapper.css({"height" : "100%"});
        $homepicture1.css({"height" : "62%"});
        $homepicture3.css({"height" : "62%"});
        $homepicture5.css({"height" : "32%"});
        $homepicture6.css({"height" : "32%"});
    }
}

function goToTopsportersMobile() {   
    window.location.href = "www.talentempowerment.nl/voortopsportersmobile";
}

function goToTopstudentenMobile(){
    window.location = "www.talentempowerment.nl/doortopstudentenmobile";
}

function goToJoinMobile() {
    window.location = "www.talentempowerment.nl/joinourteammobile";
}

function goToPartnersMobile() {
    window.location = "www.talentempowerment.nl/partnersmobile";
}
