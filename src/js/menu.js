$("#main-menu a").click(function () {
    $("#main-menu a").removeClass("active");
    $(this).addClass("active");
    $(".content-wrapper").addClass("d-none");
    switch ($(this).attr("data-menu")) {
        case "DASHBOARD" :
            $("#dashboard").removeClass("d-none");
            break;
        case "MANAGE-CUSTOMERS":
            $("#manage-customers").removeClass("d-none");
            break;
        case "MANAGE-ITEMS":
            $("#manage-items").removeClass("d-none");
            break;
        case "PLACE-ORDERS":
            $("#place-orders").removeClass("d-none");
            break;
        case "SEARCH-ORDER":
            $("#search-orders").removeClass("d-none");
            break;
        case "SETTINGS":
            $("#settings").removeClass("d-none");
            break;
        default:
            break;
    }
});
