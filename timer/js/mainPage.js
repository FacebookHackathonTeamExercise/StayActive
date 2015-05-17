/*
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/
"use strict";
if (localStorage.getItem("scores") === null) {
    var scores = {
        chores: 0,
        exercise: 0,
        health: 0
    }

} else {
    var scores = JSON.parse(window.localStorage.get("scores"));
}
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
                scores.chores += 1;
            } else if (activityPool[0].category == 'exercise') {
                $scope.exercise += 1;
                scores.exercise += 1;
            } else {
                $scope.health += 1;
                scores.health += 1;
            }



            window.localStorage.set("scores", JSON.stringify(scores));
            close();
        }

    });

    app.config( [
            '$compileProvider',
            function( $compileProvider ) {
                var currentImgSrcSanitizationWhitelist = $compileProvider.imgSrcSanitizationWhitelist();
                var newImgSrcSanitizationWhiteList = currentImgSrcSanitizationWhitelist.toString().slice(0,-1)
                + '|chrome-extension:'
                +currentImgSrcSanitizationWhitelist.toString().slice(-1);

                console.log("Changing imgSrcSanitizationWhiteList from "+currentImgSrcSanitizationWhitelist+" to "+newImgSrcSanitizationWhiteList);
                $compileProvider.imgSrcSanitizationWhitelist(newImgSrcSanitizationWhiteList);
            }
        ]);
