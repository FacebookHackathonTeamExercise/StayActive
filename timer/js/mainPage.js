/*
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/
"use strict";
        if (localStorage.getItem("scores") === null) {
            var scores = {
                housemasterScore: 0,
                athleteScore: 0,
                healthScore: 0
            }

        } else {
            var scores = JSON.parse(window.localStorage.get("saved"));
        }
angular.module('ActivityDisplay', [])
    .controller('ActivityController', function ($scope) {
        $scope.activities = activityPool;
        $scope.activityId = activityPool[0].id;
        $scope.activityName = activityPool[0].name;
        $scope.activityDescription = activityPool[0].description;
        $scope.activityImage = activityPool[0].image;
        $scope.activityCategory = activityPool[0].category;
        $scope.activityFunFact = activityPool[0].funFact;
        $scope.activityBadge = activityPool[0].badge;
        $scope.housemasterScore = scores.housemasterScore;
        $scope.athleteScore = scores.athleteScore;
        $scope.healthScore = scores.healthScore;
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
            $scope.housemasterScore += 1;
             scores.housemasterScore += 1;
            $scope.athleteScore += 1;
             scores.athleteScore += 1;
            $scope.healthScore += 1;
             scores.healthScore += 1;
            //window.localStorage.set("saved", JSON.stringify(scores));
            close();
        }

    });
