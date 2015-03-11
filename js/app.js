// declare module
var app = angular.module("iframeApp", ['ngSanitize']);

app.controller("iframeController", ["$scope",'$sce', function($scope, $sce){

	// dummy data
	// dummy url
	var url = "http://scottpham.github.io/birdstrike-charts/child.html";
	// dummy height
	var height = 800;

	// attach to scope
	$scope.url = url;
	$scope.height = height;

	// myIframe = $sce.trustAsHtml('<iframe src=' + $scope.url + ' scrolling="no" frameborder="0" width="622px" height=' + height + 'px"><a href="{{url}}">View an interactive on a separate page.</a> </iframe>');

	myIframe = $sce.trustAsHtml('<iframe src=' + $scope.url + ' scrolling="no" frameborder="0" width="622px" height=' + height + 'px"><a href="{{url}}">View an interactive on a separate page.</a> </iframe>');

	$scope.$watch('iframe', function(newVal, oldVal){
		if(!newVal) return;

		console.log(newVal.url);

		myIframe = $sce.trustAsHtml('<iframe src=' + url + ' scrolling="no" frameborder="0" width="622px" height=' + height + 'px"><a href="{{url}}">View an interactive on a separate page.</a> </iframe>');
		// $scope.myIframe = myIframe;

	});

	// var myIframe = $sce.trustAsHtml('<iframe src=' + $scope.url + ' scrolling="no" frameborder="0" width="622px" height=' + height + 'px"><a href="{{url}}">View an interactive on a separate page.</a> </iframe>');

	$scope.myIframe = myIframe;

	

	console.log($scope);

	}//end of function
]);//end of controller config 