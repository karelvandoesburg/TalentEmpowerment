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
        $bartext.css({"opacity" : "1"});
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
        $homepicture1.css({"height" : bigheight + "px"});
        $homepicture3.css({"height" : bigheight + "px"});
        $homepicture5.css({"height" : smallheight + "px"});
        $homepicture6.css({"height" : smallheight + "px"});
        var sectionheight = 2*bigheight + 2*smallheight;
        $sectionwrapper.css({"height" : sectionheight+'px'});
        hideContext();
    } 
}

function getNormalContainer() {
    if($(window).width() > 999) {
        $sectionwrapper.css({"height" : "100%"});
        $homepicture1.css({"height" : "66%"});
        $homepicture3.css({"height" : "66%"});
        $homepicture5.css({"height" : "34%"});
        $homepicture6.css({"height" : "34%"});
    }
}

function goToTopsportersMobile() {
    window.location = "www.talentempowerment.nl/doortopsporters.nl";
}

function goToTopstudentenMobile(){
    window.location = "www.talentempowerment.nl/voortopsporters.nl";
}

function goToJoinMobile() {
    window.location = "www.talentempowerment.nl/joinourteam.nl";
}

function goToPartnersMobile() {
    window.location = "www.talentempowerment.nl/partners.nl";
}
