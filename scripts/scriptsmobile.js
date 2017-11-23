$(window).resize(changeSize);

function changeSize() {
    if($(window).width() > 999) {
        window.location.href = "http://www.talentempowerment.nl";
    }
}

$("button").on('click', function(){
   window.location.href = "http://www.talentempowerment.nl";
});