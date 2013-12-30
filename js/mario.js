var mario = (function(){
	
	var wrapper  = document.getElementById('wrapper');

	//create Mario containing Div
	el = document.createElement('div');
	el.id = "MarioContainer";


	var map3 = [
		['','','','','','','r','r','r','r','r','','','','','','','',''],
		['','','','','','r','r','r','r','r','r','r','r','r','r','','','',''],
		['','','','','','b','b','b','s','s','s','b','s','','','','','',''],
		['','','','','b','s','fh','s','s','s','s','b','s','s','s','','','',''],
		['','','','','b','s','fh','fh','s','s','s','s','fh','s','s','s','','',''],
		['','','','','b','b','s','s','s','s','s','fh','fh','fh','fh','','','',''],
		['','','','','','','s','s','s','s','s','s','s','s','','','','',''],
		['','','','r','r','r','r','bl','bl','bl','r','r','','','','','','',''],
		['','w','w','r','r','r','r','bl','bl','bl','bl','r','r','r','r','w','w','w',''],
		['','w','w','w','','r','r','bl','g','bl','bl','bl','bl','r','r','r','w','w',''],
		['','w','w','','','bl','bl','bl','bl','bl','bl','bl','bl','bl','','','b','',''],
		['','','','','bl','bl','bl','bl','bl','bl','bl','bl','bl','bl','bl','b','b','',''],
		['','','','bl','bl','bl','bl','bl','bl','bl','bl','bl','bl','bl','bl','b','b','',''],
		['','','b','b','bl','bl','bl','','','','','bl','bl','bl','bl','b','b','',''],
		['','','b','b','b','b','','','','','','','','','','','','',''],
		['','','','b','b','b','b','','','','','','','','','','','','']
	];

	var map2 = [
		['','','','','','','r','r','r','r','r','','','','','','','',''],
		['','','','','','r','r','r','r','r','r','r','r','r','r','','','',''],
		['','','','','','b','b','b','s','s','s','b','s','','','','','',''],
		['','','','','b','s','fh','s','s','s','s','b','s','s','s','','','',''],
		['','','','','b','s','fh','fh','s','s','s','s','fh','s','s','s','','',''],
		['','','','','b','b','s','s','s','s','s','fh','fh','fh','fh','','','',''],
		['','','','','','','s','s','s','s','s','s','s','s','','','','',''],
		['','','','','','r','r','bl','r','r','r','r','','','','','','',''],
		['','','','','r','r','r','r','bl','bl','bl','r','r','','','','','',''],
		['','','','','r','r','r','bl','bl','bl','g','bl','bl','g','','','','',''],
		['','','','','r','r','r','r','bl','bl','bl','bl','bl','bl','','','','',''],
		['','','','','bl','r','r','w','w','w','bl','bl','bl','bl','','','','',''],
		['','','','','','bl','r','w','w','bl','bl','bl','bl','','','','','',''],
		['','','','','','','bl','bl','bl','b','b','b','b','','','','','',''],
		['','','','','','','b','b','b','b','b','b','b','b','','','','',''],
		['','','','','','','b','b','b','b','','','','','','','','','']
	];

	var map1 = [
		['','','','','','','r','r','r','r','r','','','','','','','',''],
		['','','','','','r','r','r','r','r','r','r','r','r','r','','','',''],
		['','','','','','b','b','b','s','s','s','b','s','','','','','',''],
		['','','','','b','s','fh','s','s','s','s','b','s','s','s','','','',''],
		['','','','','b','s','fh','fh','s','s','s','s','fh','s','s','s','','',''],
		['','','','','b','b','s','s','s','s','s','fh','fh','fh','fh','','','',''],
		['','','','','','','s','s','s','s','s','s','s','s','','','','',''],
		['','','','','','r','r','r','r','r','bl','r','','w','','','','',''],
		['','','','w','r','r','r','r','r','r','r','r','w','w','w','','','',''],
		['','','w','w','bl','r','r','r','r','r','r','r','w','w','','','','',''],
		['','','b','b','bl','bl','bl','bl','bl','bl','bl','bl','bl','','','','','',''],
		['','','b','b','bl','bl','bl','bl','bl','bl','bl','bl','bl','','','','','',''],
		['','b','b','b','bl','bl','bl','bl','','bl','bl','bl','','','','','','',''],
		['','b','','','','','','','','b','b','b','','','','','','',''],
		['','','','','','','','','','b','b','b','b','b','','','','',''],
		['','','','','','','','','','','','','','','','','','','']
	];

	var mapArray = [map1, map2, map3];
	
	
	//create the pixel grid
	var grid = new Array();

	var rowLimit = map1.length;
	var columnLimit = map1[0].length;

	var rowCount = 0;
	while(rowCount < rowLimit) {
		grid[rowCount] = new Array();
		for (var i = 0; i < columnLimit; i++) {
			var className = mapLookup(map1[rowCount][i]);
			grid[rowCount][i] = pixelBlock(className);
		}
		rowCount++;
	};

	//create the block
	function pixelBlock(className) {
		var block = document.createElement('div');
		block.className += 'marioBlock ';

		if (className) {
			block.className += className;
		}

		el.appendChild(block);

		return block;
	};

	//map key to class lookup
	function mapLookup(key) {
		var className = null;

		switch(key) {
			case 'r':
				className = 'redBlock';
				break;							
			case 'b':
				className = 'brownBlock';							
				break;
			case 's':
				className = 'skinBlock';							
				break;
			case 'bl':
				className = 'blueBlock';							
				break;
			case 'w':
				className = 'whiteBlock';							
				break;
			case 'g':
				className = 'goldBlock';							
				break;
			case 'fh':
				className = 'hairBlock';							
				break;
			default:
				className = "";
		}

		return className;
	};

	//append pixel grid
	wrapper.appendChild(el);

	// private vars
	var _currentIndex = 1;

	function _getMap() {
		return mapArray[_getMapIndex()];		
	};

	function _getMapIndex() {
		var index;		
		
		if (_currentIndex > mapArray.length-1) {
			_currentIndex = 0;
			index = 0;
		} else {
			index = _currentIndex++;
		}
	
		return index;
	};
	

	var mario = {				
		id : "mario",
			
		startAnimation: function () {
			var self = this;
			console.log(_currentIndex);
			setInterval(function(){		
				var map = _getMap();			
				rowCount = 0;
				while(rowCount < rowLimit) {
					for (var i = 0; i < columnLimit; i++) {
						var className = mapLookup(map[rowCount][i]);
						grid[rowCount][i].className = 'marioBlock ' + className;
					}					
					rowCount++;	
				}

			},65);
		},
	};

	return mario;

}());

setInterval(function(){
	$( "#MarioContainer" ).animate({ "margin-left": "1400px" }, 3000, function() {
		$( "#MarioContainer" ).css("visibility", "hidden");	
		$( "#MarioContainer" ).css("margin-left", "-350px");	
		$( "#MarioContainer" ).css("visibility", "visible");
	} );	

}, 4000)

mario.startAnimation();



