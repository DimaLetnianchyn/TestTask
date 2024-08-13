import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.component.html',
  styleUrls: ['./sensor-details.component.css']
})
export class SensorDetailsComponent implements OnInit {
  stationId: number;
  sensors: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.stationId = +this.route.snapshot.paramMap.get('id');
    this.http.get(`/api/sensors/${this.stationId}`).subscribe(data => {
      this.sensors = data;
    });
  }
}
