'use strict';

$(document).ready(function() {
    //var BG = chrome.extension.getBackgroundPage();

    var count = 0;
    var i;

    $('#activityButton').click(function() {
        //initial start of the game
        //    $('#activityView').modal();
        chrome.tabs.create({"url": "../mainPage.html"});
    }); // modal start game



    //$('#countdown-seconds').setTimer(function (i, count) {
    //    $(this).text(count);
    //}, 1000, 11, true, function () {
    //    //$(this).text("ok");
    //    window.location.replace("../mainPage.html")
    //});

    window.onload = timedText;
    function timedText() {
        $('#countdown-seconds').setTimer(function (i, count) {
            $(this).text(count);
        }, 1000, 31, true, function () {
            //$(this).text("ok");
            window.location.replace("../mainPage.html")
        });
    }

    
    }); //jQuery Ready Function