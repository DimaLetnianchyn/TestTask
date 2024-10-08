import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private apiUrl = 'http://localhost:3000/api/stations'; 

  constructor(private http: HttpClient) {}

  // Метод для получения списка станций
  getStations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
