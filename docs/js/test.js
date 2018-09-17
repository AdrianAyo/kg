<div class="col-md-2">
<div class="mapz text-center wow fadeInUp" data-wow-duration="1s">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.2995227030106!2d16.988963315915388!3d51.12138297957351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fea06f9c36f03%3A0x473eac47bbd8a9d6!2sSi%C5%82ownia+McFIT+Wroc%C5%82aw+Fabryczna!5e0!3m2!1spl!2spl!4v1510784072606" width="300" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
</div>

<div class="col-md-2">
<div class="mapz text-center wow fadeInUp" data-wow-duration="1s">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.9457612370384!2d17.02411131591509!3d51.10946087957175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc20b2e006acb%3A0x6bc1c6e9013ddaa0!2sSi%C5%82ownia+McFIT+Wroc%C5%82aw+Stare+Miasto!5e0!3m2!1spl!2spl!4v1510784102606" width="300" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
</div>







function initMap() {
	// Styles a map in night mode.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 51.110, lng: 17.000},
		zoom: 12,
		styles: [
			{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
			{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
			{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
			[
				{
					"featureType": "all",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						},
						{
							"saturation": "-100"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"saturation": 36
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 40
						},
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "off"
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						},
						{
							"weight": 1.2
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#4d6059"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#4d6059"
						}
					]
				},
				{
					"featureType": "landscape.natural",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#4d6059"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 21
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#4d6059"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#4d6059"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#7f8d89"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#7f8d89"
						},
						{
							"lightness": 29
						},
						{
							"weight": 0.2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 18
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#7f8d89"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 19
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#2b3638"
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#2b3638"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#24282b"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#24282b"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}
			]   ]
	});
}