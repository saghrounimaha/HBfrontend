import { Component } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent {
  breadCrumbItems!: Array<{}>;

  markers: any;

  markersoverlays: any;
  overlays: any;
  panorama: any;
  maptype: any;
  typeoverlays: any;

  constructor() { }

  ngOnInit() {

    // Breadcrumb Item
    this.breadCrumbItems = [
      { label: 'Maps' },
      { label: 'Google Maps', active: true }
    ];

    // Map Option
    this.markers = {
      center: { lat: -12.043333, lng: -77.028333 },
      zoom: 15,
    };

    this.panorama = {
      center: { lat: 42.3455, lng: -71.0983 },
      zoom: 15
    };


    this.maptype = {
      center: { lat: -12.043333, lng: -77.028333 },
      zoom: 15,
      type: ["hybrid", "roadmap", "satellite", "terrain", "osm"],
      maxZoom: 18
    };

    // Map Marker
    this.markersoverlays = [
      new google.maps.Marker({
        position: { lat: -12.043333, lng: -77.028333 }, title: "Lima", details: {
          database_id: 42,
          author: 'HPNeo'
        },
        click: function (e: any) {
          alert('You clicked in this marker');
        }
      }),
    ];

    this.overlays = [
      new google.maps.circle({
        lat: new google.maps.getCenter().lat(),
        lng: new google.maps.getCenter().lng(),
        geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2
      })
    ];

    this.typeoverlays = [
      new google.maps.set
    ];
  }

  zoomIn(map: any) {
    map.setZoom(map.getZoom() + 1);
  }

  zoomOut(map: any) {
    map.setZoom(map.getZoom() - 1);
  }

  clear() {
    this.overlays = [];
  }

}
