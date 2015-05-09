'use strict';

$(document).ready(function() {
    //var BG = chrome.extension.getBackgroundPage();

    var startTime = 60;

    $('#activityButton').click(function() {
        //initial start of the game
        //    $('#activityView').modal();
        chrome.tabs.create({"url": "../mainPage.html"});
    }); // modal start game




    $('#countdown-seconds').setTimer(function(i, count) {
        $(this).text(count);
    }, 1000, 11, true, function() {
        //$(this).text("ok");
        window.location.replace("../mainPage.html")
    });
    
}); //jQuery Ready Function