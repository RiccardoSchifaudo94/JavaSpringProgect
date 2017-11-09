function contatti($scope){
	$scope.status = false;
	$scope.nome = "Inserisci il tuo nome";
	$scope.cognome = "Inserisci il tuo cognome";
	$scope.email = "Inserisci la tua email";
	$scope.messaggio="Inserisci messaggio";
}
app.controller('contatti',contatti);