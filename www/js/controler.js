 .controller('AppCtrl',function ($scope,$state,$ionicPopup){
	
		$scope.login1={};
		var user="admin";
		var password="123456";
		
		$scope.doLogin=function(){
		 if(user==$scope.login.username && password==$scope.login.password){
			$ionicPopup.alert({
			title:'LOGIN',
			template: 'OK LOGIN'
})
			$state.go("history");

			}else{

			$ionicPopup.alert({
			title:'LOGIN',
			template: 'NOT LOGIN!!!'
			})

			$state.go("login");
	 }		
	 }
})