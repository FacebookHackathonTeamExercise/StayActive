/*
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/
"use strict";
var CurrentActivityId;
var CurrentActivityName;
var CurrentActivityDescription;
var CurrentActivityImage;
var CurrentActivityCategory;
var CurrentActivityFunFact;
var CurrentActivityBadge;


angular.module('ActivityDisplay', [])
    .controller('ActivityController', function ($scope) {
        selectNewActivity();
        $scope.activities = activityPool;
        $scope.activityId = activityPool[0].id;
        $scope.activityName = activityPool[0].name;
        $scope.activityDescription = activityPool[0].description;
        $scope.activityImage = activityPool[0].image;
        $scope.activityCategory = activityPool[0].category;
        $scope.activityFunFact = activityPool[0].funFact;
        $scope.activityBadge = activityPool[0].badge;

        $scope.shuffle = function () {
            activityPool = _.shuffle(activityPool);
            $scope.visible = !$scope.visible;
            $scope.activityId = activityPool[0].id;
            $scope.activityName = activityPool[0].name;
            $scope.activityDescription = activityPool[0].description;
            $scope.activityImage = activityPool[0].image;
            $scope.activityCategory = activityPool[0].category;
            $scope.activityFunFact = activityPool[0].funFact;
            $scope.activityBadge = activityPool[0].badge;
        };
    });

function selectNewActivity() {

    activityPool = _.shuffle(activityPool);

    CurrentActivityId = activityPool[0].id;
    CurrentActivityName = activityPool[0].name;
    CurrentActivityDescription = activityPool[0].description;
    CurrentActivityImage = activityPool[0].image;
    CurrentActivityCategory = activityPool[0].category;
    CurrentActivityFunFact = activityPool[0].funFact;
    CurrentActivityBadge = activityPool[0].badge;
}
