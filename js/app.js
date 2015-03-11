// declare module
var app = angular.module("iframeApp", []);

app.controller("iframeController", ["$scope", function($scope){

	// dummy data
	// dummy url
	var url = "http://scottpham.github.io/birdstrike-charts/child.html";
	// dummy height
	var height = 800;

	// attach to scope
	$scope.url = url;
	$scope.height = height;

	console.log($scope);

	}//end of function

]);//end of controller config 