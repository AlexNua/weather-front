import { Component } from '@angular/core';
import { RestService } from './services/rest.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city = '';
  lastCities: any;
  forecasts: any;

  constructor(public rest:RestService, public cookie: CookieService) { }

   ngOnInit() {
   	this.lastCities = this.cookie.get('last-cities') ? JSON.parse(this.cookie.get('last-cities')) : [];
  }

  public getData(req_city) {
  	if(req_city) {
  		this.city = req_city;
  	}
  	if(this.lastCities.indexOf(this.city) === -1 ){
	  	let countCities = this.lastCities.unshift(this.city);
	  	if (countCities > 5 ) {
	  		this.lastCities.pop();
	  	}
			this.cookie.set('last-cities', JSON.stringify(this.lastCities));
  	}

    this.rest.getData(this.city).subscribe((data: any) => {
      this.forecasts = data.body.forecast;
      console.log(this.forecasts);
    });
  }
}
