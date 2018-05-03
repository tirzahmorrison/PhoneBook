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
            data: userInput,
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

            //use /api/contacts
            //GET request using authorization/bearer with "token" in local storage
            //return list of contacts
            $http({
                url: "/api/contacts",
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
            }).then(resp => {
                console.log(resp)
                $scope.contacts = resp.data;
            })
                
        })
    }



    //new user signs up
    //take username and password and create new user in db
    $scope.signup = () => {

        $scope.UserValid = false;

        const newUserInput = {
            UserName: $scope.newusername,
            Password: $scope.newpassword,
            ConfirmPassword: $scope.newpasswordconfirmed
        }

        $http({
            url: "/api/account/register",
            method: "POST",
            data: newUserInput
        }).then(resp => {
            console.log(resp)
            $scope.newUser = resp.data;
            $scope.UserValid = true;
        })
    }
}])