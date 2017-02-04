$(document).ready(function() {
    $(".nav").click(function() {
        $(this).toggleClass("navTog");
        $(".m-button").toggleClass("m-buttonTog");
        $(".list").toggleClass("listTog");
    })
});
