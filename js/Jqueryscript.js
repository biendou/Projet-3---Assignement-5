$(document).ready(function () {
    $("h1").css("color", "#EF6C00");

});

$("#thumbBox div img").click(function () {

    let link = $(this).attr("src").replace("small", "medium");
    let altlink = $(this).attr("alt");
    let titlelink = $(this).attr("title");
    let ftext = "<em>" + altlink + "</em> <br>" + titlelink;
    $("#imgManipulated img").attr("src", link);
    $("#imgManipulated img").attr("alt", altlink);
    $("figcaption").html(ftext);

});

$("#resetFilters").click(function () {
    let opax = $("#sliderOpacity").attr("value");
    let satx = $("#sliderSaturation").attr("value");
    let brix = $("#sliderBrightness").attr("value");
    let huex = $("#sliderHue").attr("value");
    let grax = $("#sliderGray").attr("value");
    let blux = $("#sliderBlur").attr("value");
    $("#imgManipulated").css("filter", "opacity(" + opax + "%) saturate(" + satx + "%) brightness(" + brix + "%) hue-rotate(" + huex + "deg) grayscale(" + grax + "%) blur(" + blux + "px)");
    $("#sliderOpacity").val(opax);
    $("#sliderSaturation").val(satx);
    $("#sliderBrightness").val(brix);
    $("#sliderHue").val(huex);
    $("#sliderGray").val(grax);
    $("#sliderBlur").val(blux);
    $("#sliderOpacity").next().text(opax);
    $("#sliderSaturation").next().text(satx);
    $("#sliderBrightness").next().text(brix);
    $("#sliderHue").next().text(huex);
    $("#sliderGray").next().text(grax);
    $("#sliderBlur").next().text(blux);

});

$(".sliders").change(function () {

    let opax = $("#sliderOpacity").val();
    let satx = $("#sliderSaturation").val();
    let brix = $("#sliderBrightness").val();
    let huex = $("#sliderHue").val();
    let grax = $("#sliderGray").val();
    let blux = $("#sliderBlur").val();


    let val = $(this).val();
    let exp = $(this).attr("id");
    $(this).next().text(val);
    switch (exp) {
        case 'sliderOpacity':
            $("#imgManipulated").css("filter", "opacity(" + val + "%) saturate(" + satx + "%) brightness(" + brix + "%) hue-rotate(" + huex + "deg) grayscale(" + grax + "%) blur(" + blux + "px)");
            break;

        case 'sliderSaturation':

            $("#imgManipulated").css("filter", "opacity(" + opax + "%) saturate(" + val + "%) brightness(" + brix + "%) hue-rotate(" + huex + "deg) grayscale(" + grax + "%) blur(" + blux + "px)");
            break;

        case 'sliderBrightness':

            $("#imgManipulated").css("filter", "opacity(" + opax + "%) saturate(" + satx + "%) brightness(" + val + "%) hue-rotate(" + huex + "deg) grayscale(" + grax + "%) blur(" + blux + "px)");
            break;

        case "sliderHue":

            $("#imgManipulated").css("filter", "opacity(" + opax + "%) saturate(" + satx + "%) brightness(" + brix + "%) hue-rotate(" + val + "deg) grayscale(" + grax + "%) blur(" + blux + "px)");
            break;

        case "sliderGray":
            $("#imgManipulated").css("filter", "opacity(" + opax + "%) saturate(" + satx + "%) brightness(" + brix + "%) hue-rotate(" + huex + "deg) grayscale(" + val + "%) blur(" + blux + "px)");
            break;

        case "sliderBlur":
            $("#imgManipulated").css("filter", "opacity(" + opax + "%) saturate(" + satx + "%) brightness(" + brix + "%) hue-rotate(" + huex + "deg) grayscale(" + grax + "%) blur(" + val + "px)");
            break;

        default:

    };


});