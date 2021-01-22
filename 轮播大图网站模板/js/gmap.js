$(document).ready(function(){

//Gmap
	
	var map;
	var myPlace = new google.maps.LatLng(50.41461525633333, 6.923379516333383);

	var MY_MAPTYPE_ID = 'custom_style';

	
	function initialize() {

		var featureOpts = [
		{
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{ hue: '#1b1f24' },
			{ saturation: -90 },
			{ lightness: -85 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'landscape',
		elementType: 'all',
		stylers: [
			{ hue: '#ffffff' },
			{ saturation: -80 },
			{ lightness: -2 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{ hue: '#e6e6e6' },
			{ saturation: -90 },
			{ lightness: -13 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'administrative.country',
		elementType: 'all',
		stylers: [
			{ hue: '#ffcb08' },
			{ saturation: 100 },
			{ lightness: -0 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{ hue: '#d8322b' },
			{ saturation: -50 },
			{ lightness: -6 },
			{ visibility: 'on' }
		]
	}
		];

		var mapOptions = {
			zoom: 7,
			scrollwheel: false,
			center: myPlace,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
			},
			mapTypeId: MY_MAPTYPE_ID
		};

		map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

		var styledMapOptions = {
			name: 'Custom Style'
		};
		
		var marker =  new google.maps.Marker({
		position:myPlace,
		map:map
		
	})
		var user_content = '<div style="padding: 20px"><p>Avalin Company</p></div>';
		var infowindow = new google.maps.InfoWindow({
			content: user_content
		})
		google.maps.event.addListener(marker,'click', function(){
			infowindow.open(map, marker);
		});
		var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	}

	google.maps.event.addDomListener(window, 'load', initialize);

	//Gmap END


})


