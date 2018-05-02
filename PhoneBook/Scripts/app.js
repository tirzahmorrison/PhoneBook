angular.module("main", []).controller("mainController", ["$scope", "$http", ($scope, $http) => {

    //existing user logs in to system
    $scope.login = () => {

        const userInput = {
            UserName: $scope.username,
            Password: $scope.password,
            grant_type: "password"
        }

        $http({
            url: "/token",
            method: "POST",
            data: data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
        }).then(resp => {
            if (resp.status == 200) {
                console.log(resp)
                localStorage.setItem("token", resp.data.access_token)
            }
            })

        //use /api/contacts
            //GET request using authorization/bearer with "token" in local storage
            //return list of contacts
    }


    //new user signs up
        //take username and password and create new user in db
}])