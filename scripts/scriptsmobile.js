$(window).resize(changeSize);

function changeSize() {
    if($(window).width() > 999) {
        window.location = "file:///C:/Users/karel/Documents/WebDevelopment/TalentEmpowerment/index.html";
    }
}