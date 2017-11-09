function lista_utenti($scope,ListaUtentiService) {
	
	$scope.utenti = [];
	$scope.utenti.push({id:0,name:"Ricky",surname:"Schifaudo",role:"developer",email:"riccardo.schifaudo@inrebus.it"});
	$scope.utenti.push({id:1,name:"Ricky",surname:"Schifaudo",role:"developer",email:"riccardo.schifaudo@inrebus.it"});
	$scope.utenti.push({id:2,name:"Ricky",surname:"Schifaudo",role:"developer",email:"riccardo.schifaudo@inrebus.it"});
	$scope.utenti.push({id:3,name:"Ricky",surname:"Schifaudo",role:"developer",email:"riccardo.schifaudo@inrebus.it"});
	$scope.utenti.push({id:4,name:"Ricky",surname:"Schifaudo",role:"developer",email:"riccardo.schifaudo@inrebus.it"});
	$scope.utenti.push({id:5,name:"Ricky",surname:"Schifaudo",role:"developer",email:"riccardo.schifaudo@inrebus.it"});
	
    $scope.getUser = function () {
        var id = $scope.user.id;
        ListaUtentiService.getUser($scope.user.id)
          .then(function success(response) {
              $scope.user = response.data;
              $scope.user.id = id;
              $scope.message='';
              $scope.errorMessage = '';
          },
          function error (response) {
              $scope.message = '';
              if (response.status === 404){
                  $scope.errorMessage = 'User not found!';
              }
              else {
                  $scope.errorMessage = "Error getting user!";
              }
          });
    };
    
    $scope.addUser = function () {
        if ($scope.user != null && $scope.user.name) {
        	ListaUtentiService.addUser($scope.user.name, $scope.user.email)
              .then (function success(response){
                  $scope.message = 'User added!';
                  $scope.errorMessage = '';
              },
              function error(response){
                  $scope.errorMessage = 'Error adding user!';
                  $scope.message = '';
            });
        }
        else {
            $scope.errorMessage = 'Please enter a name!';
            $scope.message = '';
        }
    }
    
    $scope.updateUser = function () {
    	ListaUtentiService.updateUser($scope.user.id, 
          $scope.User.name, $scope.user.email)
          .then(function success(response) {
              $scope.message = 'User data updated!';
              $scope.errorMessage = '';
          },
          function error(response) {
              $scope.errorMessage = 'Error updating user!';
              $scope.message = '';
          });
    }
    
    $scope.deleteUser = function () {
    	ListaUtentiService.deleteUser($scope.user.id)
          .then (function success(response) {
              $scope.message = 'User deleted!';
              $scope.User = null;
              $scope.errorMessage='';
          },
          function error(response) {
              $scope.errorMessage = 'Error deleting user!';
              $scope.message='';
          });
    }
    
    $scope.getAllUsers = function () {
    	ListaUtentiService.getAllUsers()
          .then(function success(response) {
              $scope.users = response.data._embedded.users;
              $scope.message='';
              $scope.errorMessage = '';
          },
          function error (response) {
              $scope.message='';
              $scope.errorMessage = 'Error getting users!';
          });
    }
}
app.controller("lista_utenti",lista_utenti);