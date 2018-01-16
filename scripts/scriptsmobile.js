//$(window).ready(makeCSSmobile);

$(window).resize(changeSize);

function changeSize() {
    if($(window).width() > 999) {
        window.location.href = "http://www.talentempowerment.nl";
    }
}

$("button").on('click', function(){
   window.location.href = "http://www.talentempowerment.nl";
});

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

//function makeCSSmobile() {
//    if(isMobileDevice) {
//        console.log("test");
//        $('.ul1').css({'display':'block'});
//        $('.ul1 > li').css({'width':'auto','height':'auto','marginBottom':'20px'});
//        $('h2').css({'font-size':'40px','h1':'40px'})
//    }
//};