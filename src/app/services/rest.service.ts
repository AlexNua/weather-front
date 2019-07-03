import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:3000/api/weather/daily/';

	getData(city): Observable<any> {
	  return this.http.get(this.endpoint + city, {
      headers: new HttpHeaders()
        .set('token', '2a59495e89534508bf595ce5431c50a7'),
      observe: 'response'
    })
	}

}
