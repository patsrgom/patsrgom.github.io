var url = document.location.href;

$(function () {
    if (url.indexOf("m=1") === -1) {
        $("#logo_display").css("display", "none");
    }
});