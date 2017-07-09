import { Directive, OnDestroy, OnInit, Input } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { GoogleMap, Marker } from '@agm/core/services/google-maps-types';
import { Observable } from 'rxjs';
import 'js-marker-clusterer/src/markerclusterer.js';

declare const google;
declare const MarkerClusterer;

@Directive({
  selector: 'marker-cluster'
})
export class MarkerCluster implements OnInit {

  @Input()
  points: any[];

  constructor(private gmapsApi: GoogleMapsAPIWrapper) {
  }

  ngOnInit() {

    this.gmapsApi.getNativeMap().then(map => {

		let markerIcon = {
			url: "assets/marker.png", // url
			scaledSize: new google.maps.Size(35, 35)
		  }


      let style = {
        url: "assets/cluster.png",
        height: 40,
        width: 40,
        textColor: '#FFF',
        textSize: 11,
        backgroundPosition: "center center"
      };

		let options = {
		  imagePath: "/assets/cluster",
		  gridSize: 70,
		  styles: [style, style, style]
		};

		let markers = [];


      Observable
        .interval(500)
        .skipWhile((s) => this.points == null || this.points.length <= 0)
        .take(1)
        .subscribe(() => {
          for (let point of this.points) {
			let marker = new google.maps.Marker({
			  position: new google.maps.LatLng(point.Latitude, point.Longitude),
			  icon:markerIcon
			});
			markers.push(marker);
		  }

          var markerCluster = new MarkerClusterer(map, markers, options);

        })
    });
  }

}
