// declare module
var app = angular.module("iframeApp", ['ngSanitize']);

app.controller("iframeController", ["$scope",'$sce', function($scope, $sce){

	// dummy data
	this.url = "";
	this.height;
	this.width = 622;
	this.widthPlus = +this.width + 10;
	this.mobileWidth=300;

	if(this.url.length>0){
		this.myIframe = $sce.trustAsHtml('<iframe src=' + this.url + ' scrolling="no" frameborder="0" width="622px" height=' + this.height + 'px"><a href="{{url}}">View an interactive on a separate page.</a> </iframe>');
	} else{
		this.myIframe = "";
	}
	
	
	//pass cope to watchgroup
	var that = this;

	$scope.$watchGroup(['iframe.url', 'iframe.height', 'iframe.width'], function(newVal, oldVal){

		// dump out if there is no newVal
		if(!newVal) return;
		// update widthPlus for 
		that.widthPlus = +this.width + 10;
		// dump out if height is zero or url is empty
		if (!that.height || that.url.length<1) return;

		that.myIframe = $sce.trustAsHtml('<iframe src=' + that.url + ' scrolling="no" frameborder="0" width="' + that.width + '" height=' + that.height + 'px"><a href="{{that.url}}">View an interactive on a separate page.</a> </iframe>');
	

		

	});


	}//end of function
]);//end of controller config 