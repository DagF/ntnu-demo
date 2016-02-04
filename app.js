angular.module('DemoApp', ['ngMaterial'])
    .controller('AppCtrl', function ($scope, $http) {
    
        var url = "http://alpha-flyplasser.azurewebsites.net/api/values?";
        var reqest = {
            method: 'GET',
            url: url + 'from=OSL?direction=d&start=2016-02-04T17:00&end=2016-02-04T17:59&language=no',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };

        $scope.delayed = function(flight){
            if( flight.ScheduleChanged){

                console.log("Delayed: ", flight);
            }
            else{
                console.log("On time: ", flight)
            }
            return flight.ScheduleChanged;
        };


        $http(reqest).then(
            function (response) {
                $scope.data = response.data;
            },
            function(error) {
                $scope.data = error;
            }
        );

});
