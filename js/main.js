$(window).on("load", start);

function start() {
    console.log("Start");
    $("#knap").addClass("puls");
    $("#nav_dropdown_close").addClass("hidden_menu_icon");
    $("nav ul").addClass("hidden_menu_icon");
    $("nav").removeClass("full_menu");
    $("#nav_dropdown_open").removeClass("hidden_menu_icon");
    $("#nav_dropdown_open").on("click", menu_dropdown);
}

function menu_dropdown() {
    $("#knap").removeClass("puls");
    $("#nav_dropdown_close").removeClass("hidden_menu_icon");
    $("#nav_dropdown_open").addClass("hidden_menu_icon");
    $("nav").addClass("full_menu");
    $("nav ul").removeClass("hidden_menu_icon");
    $("#nav_dropdown_close").on("click", start);
}
