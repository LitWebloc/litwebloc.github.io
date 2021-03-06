"use strict";

$('.nav_mob').click(function () {
    $('header nav').hasClass("active") ? $('header nav').removeClass('active') : $('header nav').addClass('active');
    $('header').hasClass('navFixed2') ? $('header').removeClass('navFixed2') : $('header').addClass('navFixed2');
    $(window).scroll(function () {
        if ($('header').hasClass('navFixed2') && $('header nav').hasClass("active")) {
            $('header').removeClass('navFixed2');
            $('header nav').removeClass('active');
        }
    });
});

$(window).on('load', function () {
    $('.onload').fadeOut('slow');
});
$('.fadeBox').waypoint(function () {
    $('header').hasClass('navFixed') ? $('header').removeClass('navFixed') : $('header').addClass('navFixed');
    $('.fadeBox').hasClass('fade') ? $('.fadeBox').removeClass('fade') : $('.fadeBox').addClass('fade');
});

$('.js-tilt').tilt({
    glare: true,
    reset: false,
    perspective: 10000,
    maxGlare: 0
});
new WOW().init();

let $page = $('html, body');
$('.arrow_down a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

$('.modal').on($.modal.BEFORE_BLOCK, function (event) {
    $('.blur').addClass('active');

    $('header').addClass('active');
});
$('.modal').on($.modal.CLOSE, function (event) {
    $('.blur').removeClass('active');

    $('header').removeClass('active');
});
$('a[data-modal]').click(function (event) {
    $(this).modal({
        fadeDuration: 500,
        fadeDelay: 0.50
    });
    return false;
});



$(".services-head .services-check[data-change='dev-site']").change(function () {
    if ($(this).prop("checked") == true) {
        $(".services-head .services-check[data-change='dev-design']").prop("checked", true);
        $(".services-head .services-check[data-change='add-dev']").prop('disabled', true);
    } else {
        $(".services-head .services-check[data-change='dev-design']").prop("checked", false);
        $(".services-head .services-check[data-change='add-dev']").prop('disabled', false);
    }
});
$(".services-head .services-check[data-change='dev-design']").change(function () {
    if ($(".services-head .services-check[data-change='dev-site']").prop("checked") == true && $(this).prop("checked") == false) {
        $(".services-head .services-check[data-change='dev-site']").prop("checked", false);
        $(".services-head .services-check[data-change='add-dev']").prop('disabled', false);
    }
});

$(function () {
    $(".culculator").find("input").each(function (i) {
        if ($(".currency p").text() == "$") {
            $(this).parent().find(".number").html($(this).val());
        } else {
            $(this).parent().find(".number").html($(this).val() * 2.1);
        }
    });
});

function Currency() {
    $(".currency-value").html($(".currency p").text());
}

function Price() {

    $(".culculator").find("input").each(function (i) {
        if ($(".currency p").text() == "$") {
            console.log($(this).val());
            $(this).val($(this).val() / 2.1);
        } else {
            console.log($(this).val());
            $(this).val($(this).val() * 2.1);
        }
        $(this).parent().find(".number").html($(this).val());

    });

}
Currency();
$(".currency span").click(function () {
    if ($(".currency p").text() == "$") {
        $(".currency p").text("Br");
        Currency();
        Price();
    } else {
        $(".currency p").text("$");
        Currency();
        Price();
    }
    Culculator();
});
$(".services.hide").css("max-height", "0");
$("#top-the-cost .hide").fadeOut(0);
//Скрывание и появление элементов в калькуляторе

$(".services-head").change(function () {
    let changeHide = [],
        changedView = [];
    //Переюираем все input внутри .services-head
    $(this).find("input").each(function (i) {
        //Если input == checked, то запмсываем в массив changeHide и записываем все input == false в массив changedView
        if ($(this).prop("checked") == true) {
            changeHide[i] = $(this).attr('data-change');

            //Удаляем все пустые значения масива
            let changePrice = changeHide.filter(function (el) {
                return el != null;
            });

            for (let i = 0; i < changePrice.length; i++) {
                if ($(this).prop("checked", true) && $("." + changePrice[i]).hasClass("hide")) {
                    $("." + changePrice[i]).removeClass("hide");
                    $("." + changePrice[i]).css("max-height", "100%");
                    //                $("#" + changePrice[i]).removeClass("hide");
                    $("#" + changePrice[i]).fadeIn(500);
                }
            }
        } else {
            changedView[i] = $(this).attr('data-change');

            let changePrice = changedView.filter(function (el) {
                return el != null;
            });

            for (let i = 0; i < changePrice.length; i++) {
                if ($(this).prop("checked", false) && !$("." + changePrice[i]).hasClass("hide")) {
                    $("." + changePrice[i]).addClass("hide");
                    $("." + changePrice[i]).css("max-height", "0");
                    //            $("#" + changePrice[i]).addClass("hide");
                    $("#" + changePrice[i]).fadeOut(300);
                    $("." + changePrice[i]).find("input").prop("checked", false);
                }
            }


        }




    });
});

function Culculator() {
    let theCost = 0,
        checked = [],
        dev_site = 0,
        devChecked = [],
        dev_seo = 0,
        seoChecked = [],
        dev_add = 0,
        addChecked = [];
    $(".culculator input").each(function (i) {
        if ($(this).prop("checked") == true) {
            checked[i] = $(this).val();

        }

    });

    $($(".dev-site input")).each(function (i) {
        if ($(this).prop("checked") == true) {
            devChecked[i] = $(this).val();
        }
    });
    $($(".dev-design input")).each(function (i) {
        if ($(this).prop("checked") == true) {
            seoChecked[i] = $(this).val();
        }

    });
    $($(".add-dev input")).each(function (i) {
        if ($(this).prop("checked") == true) {
            addChecked[i] = $(this).val();
        }
    });
    //Удаление пустых массивов
    let filtered = checked.filter(function (el) {
        return el != null;
    });
    let filtered2 = devChecked.filter(function (el) {
        return el != null;
    });
    let filtered3 = seoChecked.filter(function (el) {
        return el != null;
    });
    let filtered4 = addChecked.filter(function (el) {
        return el != null;
    });
    //Счёт по группам
    for (let i = 0; i < filtered.length; i++) {
        theCost += +filtered[i];
    }
    for (let i = 0; i < filtered2.length; i++) {
        dev_site += +filtered2[i];
    }
    for (let i = 0; i < filtered3.length; i++) {
        dev_seo += +filtered3[i];
    }
    for (let i = 0; i < filtered4.length; i++) {
        dev_add += +filtered4[i];
    }

    $("#dev-site .result").text(dev_site);
    $("#dev-design .result").text(dev_seo);
    $("#add-dev .result").text(dev_add);
    $("#total-cost .result").text(theCost);
}

function iframeClose(){
    $(".iframe").addClass("hide");
    $("iframe").remove();
    $(".iframe-title").addClass("hide");
    $("body").removeAttr( 'style' );
}

$(".services").change(function () {
    Culculator();
});
$(".iframe").ready(function () {
    $(".iframe-title .close").click(function () {
        iframeClose();
    });
    $(".iframe-title .openBrowser").click(function () {
        $(".openBrowser").attr("href", $('a[rel="nofollow"]').attr("href"));
        iframeClose();
    });
});

$('a[rel="nofollow"]').click(function () {
    $(".iframe").removeClass("hide");
    $(".iframe-title").removeClass("hide");
    $(".iframe").append('<iframe name="iframe1" src="'+ $(this).attr("href") +'"></iframe>');
//    $("body").css("overflow", "hidden");
//    $(".iframe iframe").attr("src", $(this).attr("href"));
    $("body").css("overflow", "hidden");
});
