import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.component.html',
  styleUrls: ['./sensor-details.component.css']
})
export class SensorDetailsComponent implements OnInit {
  stationId: number | null = null; // Инициализация stationId
  sensors: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.stationId = +id;
        this.loadSensors(this.stationId);
      } else {
        console.error('stationId отсутствует в маршруте');
      }
    });
  }

  loadSensors(stationId: number) {
    this.http.get(`/api/sensors/${stationId}`).subscribe(data => {
      this.sensors = data;
    });
  }
}
