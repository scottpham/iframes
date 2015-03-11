// declare module
var app = angular.module("iframeApp", []);

app.controller("iframeController", ["$scope", function($scope){

	// dummy data
	// dummy url
	var url = "http://scottpham.github.io/birdstrike-charts/child.html";
	// dummy height
	var height = 800;

	var myIframe = '<iframe ng-src={{url}} scrolling="no" frameborder="0" width="622px" height="{{height}}px"><a href="{{url}}">View an interactive on a separate page.</a> </iframe>';
	$scope.myIframe = myIframe;

	// attach to scope
	$scope.url = url;
	$scope.height = height;

	console.log($scope);

	}//end of function

]);//end of controller config 