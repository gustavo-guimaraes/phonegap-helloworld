angular.module("main",['chart.js']);

angular.module("main").controller("Ctrl", function($scope) {

	$scope.mostraGrafico = false;

	$scope.labels = ['Item 1'];
	$scope.series = ['Valor'];

	$scope.data = [
	    []
	];

	$scope.media = 0;
	$scope.mediana = 0;
	$scope.moda = 0;
	
	$scope.gerarAleatorios = function(){
		for(var mes in $scope.meses){
			$scope.meses[mes].valor = (Math.random() * 100000).toFixed(2);
		}
	}

	$scope.colours = [
		{
		    fillColor: 'rgba(64, 107, 144, 1)',
		    strokeColor: 'rgba(64, 107, 144, 1)',
		    highlightFill: 'rgba(84, 136, 181, 1)',
		    highlightStroke: 'rgba(84, 136, 181, 1)'
		}
	];

	$scope.itens = [
		{
			descricao: "Item 1",
			valor: ""
		}
	];

	$scope.novoItem = function(){
		var novo = {descricao:"Item "+($scope.labels.length+1), valor:""};
		$scope.itens.push(novo);
		$scope.labels.push('Item '+($scope.labels.length+1));
	}

	$scope.mostrarGrafico = function(){
		$scope.mostraGrafico = true;

		$scope.data = [
		    []
		];

		for(var item in $scope.itens){
			$scope.data[0].push($scope.itens[item].valor);
		}
	}




});