'use strict';

$(document).ready(function() {
    //var BG = chrome.extension.getBackgroundPage();

    $('#activityButton').click(function() {
        //initial start of the game
        //    $('#activityView').modal();
        chrome.tabs.create({"url": "http://google.com"});
    }); // modal start game

}); //jQuery Ready Function