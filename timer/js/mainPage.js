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
                $scope.activityId = CurrentActivityId;
                $scope.activityName = CurrentActivityName;
                $scope.activityDescription = CurrentActivityDescription;
                $scope.activityImage = CurrentActivityImage;
                $scope.activityCategory = CurrentActivityCategory;
                $scope.activityFunFact = CurrentActivityFunFact;
                $scope.activityBadge = CurrentActivityBadge;
        $scope.sortBy = function (colName) {
            $scope.sortCol = colName;
        }
        $scope.isSortedBy = function (colName) {
            return $scope.sortCol == colName;
        }
    });

$('#shuffleActivityButton').click(function () {
    selectNewActivity();
}); // modal start game

function selectNewActivity() {
    activityPool = _.shuffle(activityPool);
    CurrentActivityId = activityPool[0].id;
    CurrentActivityName = activityPool[0].name;
    CurrentActivityDescription = activityPool[0].description;
    CurrentActivityImage = activityPool[0].image;
    CurrentActivityCategory = activityPool[0].category;
    CurrentActivityFunFact = activityPool[0].funFact;
    CurrentActivityBadge = activityPool[0].badge;
    alert(CurrentActivityId + '\n' + CurrentActivityName + '\n' + CurrentActivityDescription + '\n' + CurrentActivityImage + '\n' + CurrentActivityCategory + '\n' + CurrentActivityFunFact + '\n' + CurrentActivityBadge);
}