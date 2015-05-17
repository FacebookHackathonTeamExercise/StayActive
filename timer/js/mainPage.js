/*
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/
"use strict";
//if (chrome.storage.sync.get("scores") === null) {
    var scores = {
        chores: 0,
        exercise: 0,
        health: 0
    }
// chrome.storage.sync.set("scores", JSON.stringify(scores));
//} else {
//    var scores = JSON.parse(chrome.storage.sync.get("scores"));
//}
var app = angular.module('ActivityDisplay', [])
    .controller('ActivityController', function ($scope) {
        $scope.activities = activityPool;
        $scope.activityId = activityPool[0].id;
        $scope.activityName = activityPool[0].name;
        $scope.activityDescription = activityPool[0].description;
        $scope.activityImage = activityPool[0].image;
        $scope.activityCategory = activityPool[0].category;
        $scope.activityFunFact = activityPool[0].funFact;
        $scope.activityBadge = activityPool[0].badge;
        $scope.chores = scores.chores;
        $scope.exercise = scores.exercise;
        $scope.health = scores.health;
        $scope.shuffle = function () {
            activityPool = _.shuffle(activityPool);
            $scope.activityId = activityPool[0].id;
            $scope.activityName = activityPool[0].name;
            $scope.activityDescription = activityPool[0].description;
            $scope.activityImage = activityPool[0].image;
            $scope.activityCategory = activityPool[0].category;
            $scope.activityFunFact = activityPool[0].funFact;
            $scope.activityBadge = activityPool[0].badge;
        };

        $scope.close = function () {
            close();
        }

        $scope.updateScore = function () {
            if (activityPool[0].category == 'chores') {
                $scope.chores += 1;
                scores.chores += $scope.chores;
            } else if (activityPool[0].category == 'exercise') {
                $scope.exercise += 1;
                scores.exercise += $scope.exercise;
            } else {
                $scope.health += 1;
                scores.health = $scope.health;
            }


            
            chrome.storage.sync.set("scores", JSON.stringify(scores));
            close();
        }

    });

app.config([
            '$compileProvider',
            function ($compileProvider) {
        var currentImgSrcSanitizationWhitelist = $compileProvider.imgSrcSanitizationWhitelist();
        var newImgSrcSanitizationWhiteList = currentImgSrcSanitizationWhitelist.toString().slice(0, -1) + '|chrome-extension:' + currentImgSrcSanitizationWhitelist.toString().slice(-1);

        console.log("Changing imgSrcSanitizationWhiteList from " + currentImgSrcSanitizationWhitelist + " to " + newImgSrcSanitizationWhiteList);
        $compileProvider.imgSrcSanitizationWhitelist(newImgSrcSanitizationWhiteList);
            }
        ]);