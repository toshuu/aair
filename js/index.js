$(document).ready(function () {
 
    /* initially hide product list items */
    $("#dino-list li").hide();
 
    /* highlight matches text */
    var highlight = function (string) {
        $("#dino-list li.match").each(function () {
            var matchStart = $(this).text().toLowerCase().indexOf("" + string.toLowerCase() + "");
            var matchEnd = matchStart + string.length - 1;
            var beforeMatch = $(this).text().slice(0, matchStart);
            var matchText = $(this).text().slice(matchStart, matchEnd + 1);
            var afterMatch = $(this).text().slice(matchEnd + 1);
            $(this).html(beforeMatch + "<em>" + matchText + "</em>" + afterMatch);
        });
    };
 
 
    /* filter products */
    $("#search-dinosaurs").on("keyup click input", function () {
        if (this.value.length > 0) {
            $("#dino-list li").removeClass("match").hide().filter(function () {
                return $(this).text().toLowerCase().indexOf($("#search-dinosaurs").val().toLowerCase()) != -1;
            }).addClass("match").show();
            highlight(this.value);
            $("#dino-list").show();
        }
        else {
            $("#dino-list, #dino-list li").removeClass("match").hide();
        }
    });
 
 
});