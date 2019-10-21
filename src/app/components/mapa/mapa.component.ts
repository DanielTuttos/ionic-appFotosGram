import { Component, OnInit, Input, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;

  @ViewChild('mapa', { static: true }) mapa;

  constructor() { }

  ngOnInit() {
    console.log(this.coords);

    const latlng = this.coords.split(',');

    const lat = Number(latlng[0]);
    const lng = Number(latlng[1]);

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsLXJvbWVyby1hZ3VpcnJlIiwiYSI6ImNrMHI1Ynd3ODAyc2czZG5sNmFzdmtkOW4ifQ.3YNzdsBEwp4vNFeJ8XmAfw';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 15
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map);

  }

}
