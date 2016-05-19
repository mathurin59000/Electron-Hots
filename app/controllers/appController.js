App.controller("AppController", function($scope, $http){
	$scope.heroes = [];
	$scope.heroe_selected = null;
	$scope.loaded = false;

	$scope.demo = {
    showTooltip : false,
    tipDirection : 'right'
  };
  $scope.$watch('demo.tipDirection',function(val) {
    if (val && val.length ) {
      $scope.demo.showTooltip = true;
    }
  });

	$http({
	  method: 'GET',
	  url: 'http://www.hotslogs.com/Default'
	}).then(function successCallback(response) {
		var tab =[];
		console.log(response);
		var el = document.createElement( 'html' );
        el.innerHTML = response.data;
        var tables = el.getElementsByTagName( 'table' );
        var ol = tables[1].firstChild.parentElement;
        var il = ol.getElementsByTagName('tbody');
        var rows = il[0].getElementsByTagName('tr');
        for(var i = 0; i<rows.length;i++){
          var values = rows[i].getElementsByTagName('td');
          var item = {
            img: "",
            name: "",
            games_played: "",
            games_banned: "",
            popularity: "",
            victory: "",
            progress: "",
            type1: "",
            type2: ""
          }
          for(var j = 0; j<values.length; j++){
            switch(j){
              case 0: var array = values[j].getElementsByTagName('img')[0].src.split('//');
                      console.log(array);
                      item.img = "http://"+array[1];
                      break;
              case 1: item.name = values[j].getElementsByTagName('a')[0].innerHTML;
                      break;
              case 2: item.games_played = values[j].innerHTML;
                      break;
              case 3: item.games_banned = values[j].innerHTML;
                      break;
              case 4: item.popularity = values[j].innerHTML;
                      break;
              case 5: item.victory = values[j].innerHTML;
                      break;
              case 6: item.progress = values[j].innerHTML;
                      break;
              case 7: item.type1 = values[j].innerHTML;
                      break;
              case 8: item.type2 = values[j].innerHTML;
                      break;        
            }
          }
          tab.push(item);
        }
        console.log(tab);
        $scope.heroes = tab;
        $scope.loaded = true;
	}, function errorCallback(response) {
	  	console.log(response);
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	});

	$scope.selectHeroe = function(heroe){
		$scope.heroe_selected = heroe;
		$("html, body").animate({ scrollTop: 0 }, "slow");
		$http({
		  method: 'GET',
		  url: 'http://www.hotslogs.com/Sitewide/HeroDetails?Hero='+heroe.name
		}).then(function successCallback(response) {
			console.log(response);
			var el = document.createElement( 'html' );
	        el.innerHTML = response.data;
	        var tables = el.getElementsByTagName( 'table' );
	        var tab1 = tables[1].getElementsByTagName('tbody');
	        console.log(tab1);
	        console.log(tab1[0].getElementsByTagName('tr'));
	        var rows_tab1 = tab1[0].getElementsByTagName('tr');
	        console.log(rows_tab1[0].className);

	        var actual_level = 0;
	        $scope.level1 = [];
	        $scope.level4 = [];
	        $scope.level7 = [];
	        $scope.level10 = [];
	        $scope.level13 = [];
	        $scope.level16 = [];
	        $scope.level20 = [];
	        for(var i = 0; i<rows_tab1.length; i++){
	        	console.log(rows_tab1[i].className);
	        	if(rows_tab1[i].className.toString()==!"rgGroupHeader"||rows_tab1[i].className.toString()=="rgRow"||rows_tab1[i].className.toString()=="rgAltRow"){
	        		console.log("td !!!!!!!");
	        		var tds = rows_tab1[i].getElementsByTagName('td');
	        		var item = {
	        			img: "",
	        			name: "",
	        			description: "",
	        			games_played: "",
	        			popularity: "",
	        			victory: ""
	        		};
	        		console.log("après td");
	        		for (var j = 2; j<tds.length; j++) {
	        			console.log(j);
	        			switch(j){
	        				case 2: var img = tds[j].getElementsByTagName('img')[0].src.split('//');
				                    item.img = "http://"+img[1];
	        						break;
	        				case 3: item.name = tds[j].innerHTML;
	        						break;
	        				case 4: item.description = tds[j].innerHTML;
	        						break;
	        				case 5: item.games_played = tds[j].innerHTML;
	        						break;
	        				case 6: item.popularity = tds[j].innerHTML;
	        						break;
	        				case 7: item.victory = tds[j].innerHTML;
	        						break;
	        			}
	        		}
	        		console.log(item);
	        		switch(actual_level){
	        			case 1: $scope.level1.push(item);
	        					break;
	        			case 4: $scope.level4.push(item);
	        					break;
	        			case 7: $scope.level7.push(item);
	        					break;
	        			case 10: $scope.level10.push(item);
	        					break;
	        			case 13: $scope.level13.push(item);
	        					break;
	        			case 16: $scope.level16.push(item);
	        					break;
	        			case 20: $scope.level20.push(item);
	        					break;
	        		}
	        	}
	        	else{
	        		console.log("c'est pas un td....");
	        		switch(actual_level){
	        			case 0: actual_level=1;
	        					break;
	        			case 1: actual_level=4;
	        					break;
	        			case 4: actual_level=7;
	        					break;
	        			case 7: actual_level=10;
	        					break;
	        			case 10: actual_level=13;
	        					break;
	        			case 13: actual_level=16;
	        					break;
	        			case 16: actual_level=20;
	        					break;
	        		}
	        		console.log("actual_level : "+actual_level);
	        	}
	        }
	        console.log($scope.level1);
	        console.log($scope.level4);
	        console.log($scope.level7);
	        console.log($scope.level10);
	        console.log($scope.level13);
	        console.log($scope.level16);
	        console.log($scope.level20);
		}, function errorCallback(response) {
		  	console.log(response);
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		});
	}

	$scope.options = {
    scrollbarV: false
  };

  $scope.data = [
    { name: 'Austin', gender: 'Male' },
    { name: 'Marjan', gender: 'Male' }
  ];
});