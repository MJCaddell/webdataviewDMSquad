'use strict';

angular.module('app').controller('vidSelectionCtrl', function ($scope) {

	$scope.init = function(){
    };

	$scope.activateVidSelectionHARDCODE = function() {
		chrome.tabs.executeScript(null, {file: "app/contentScript/activateVidSelectionHARDCODE.js"});
	}

	$scope.deactivateVidSelectionHARDCODE = function() {
		chrome.tabs.executeScript(null, {file: "app/contentScript/deactivateVidSelectionHARDCODE.js"});
	}

});
