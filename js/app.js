// declare module
var app = angular.module("iframeApp", ['ngSanitize']);

app.controller("iframeController", ["$scope",'$sce', function($scope, $sce){

	// dummy data
	this.url = "http://scottpham.github.io/birdstrike-charts/child.html";
	this.height = 600;
	this.myIframe = $sce.trustAsHtml('<iframe src=' + this.url + ' scrolling="no" frameborder="0" width="622px" height=' + this.height + 'px"><a href="{{url}}">View an interactive on a separate page.</a> </iframe>');
	
	var that = this;

	$scope.$watchGroup(['iframe.url', 'iframe.height'], function(newVal, oldVal){
		
		console.log(newVal);

		if(!newVal) return;

		return that.myIframe = $sce.trustAsHtml('<iframe src=' + that.url + ' scrolling="no" frameborder="0" width="622px" height=' + that.height + 'px"><a href="{{that.url}}">View an interactive on a separate page.</a> </iframe>');

	});


	

	console.log($scope);

	}//end of function
]);//end of controller config 