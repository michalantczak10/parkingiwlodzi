function ckeckScreenPosition() {
    "use strict";
    if (window.matchMedia("(orientation:landscape)").matches) {
        $("#aboutUsArticle").show("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").show("slow");
        $(".additionalButton").hide("slow");
    } else {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").show("slow");
        $(".additionalButton").show("slow");
    }
}

$(document).ready(function () {
    $(#aboutUsButton ").click(function () {
        if (window.matchMedia("(orientation:landscape)").matches) {
            $("#aboutUsArticle").show("slow");
            $("#offerArticle").hide("slow");
            $("#priceListArticle").hide("slow");
            $("#contactArticle").hide("slow");
            $("#driveArticle").hide("slow");
            $("#cooperativeArticle").hide("slow");
            $("nav").show("slow");
            $(".additionalButton").hide("slow");
        } else {
            $("#aboutUsArticle").show("slow");
            $("#offerArticle").hide("slow");
            $("#priceListArticle").hide("slow");
            $("#contactArticle").hide("slow");
            $("#driveArticle").hide("slow");
            $("#cooperativeArticle").hide("slow");
            $("nav").hide("slow");
            $(".additionalButton").show("slow");
        }

    });

$("#offerArticle").click(function () {
    if (window.matchMedia("(orientation:landscape)").matches) {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").show("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").show("slow");
        $(".additionalButton").hide("slow");
    } else {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").show("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").hide("slow");
        $(".additionalButton").show("slow");
    }
});

$("#priceListButton").click(function () {
    if (window.matchMedia("(orientation:landscape)").matches) {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").show("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").show("slow");
        $(".additionalButton").hide("slow");
    } else {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").show("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").hide("slow");
        $(".additionalButton").show("slow");
    }
});

$("#contactButton").click(function () {
    if (window.matchMedia("(orientation:landscape)").matches) {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").show("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").show("slow");
        $(".additionalButton").hide("slow");
    } else {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").show("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").hide("slow");
        $(".additionalButton").show("slow");
    }
});

$("#driveButton").click(function () {
    if (window.matchMedia("(orientation:landscape)").matches) {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").show("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").show("slow");
        $(".additionalButton").hide("slow");
    } else {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").show("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").hide("slow");
        $(".additionalButton").show("slow");
    }
});

$("#cooperativeButton").click(function () {
    if (window.matchMedia("(orientation:landscape)").matches) {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").show("slow");
        $("nav").show("slow");
        $(".additionalButton").hide("slow");
    } else {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").show("slow");
        $("nav").hide("slow");
        $(".additionalButton").show("slow");
    }
});

$(".additionalButton").click(function () {
    if (window.matchMedia("(orientation:landscape)").matches) {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").show("slow");
        $(".additionalButton").hide("slow");
    } else {
        $("#aboutUsArticle").hide("slow");
        $("#offerArticle").hide("slow");
        $("#priceListArticle").hide("slow");
        $("#contactArticle").hide("slow");
        $("#driveArticle").hide("slow");
        $("#cooperativeArticle").hide("slow");
        $("nav").show("slow");
        $(".additionalButton").hide("slow");
    }
});

});