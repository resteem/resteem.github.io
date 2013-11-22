$(document).ready(function () {
    $("a").hover(function () {
        $("a[href='" + $(this).attr("href") + "']").toggleClass("hover");
    });

    $(".toggle_popup").click(function () {
        $("#" + $(this).attr("target")).slideToggle("fast");
        return false;
    });
});