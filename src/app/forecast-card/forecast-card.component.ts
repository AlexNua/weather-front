import { Input, Component} from '@angular/core';
      
@Component({
    selector: 'forecast-card',
    styleUrls: ['./forecast-card.component.css'],
    template: `
      <div class="record">
        {{forecast.date}}
      </div>
      <div class="record green">
        {{forecast.summary}}
      </div>
      <div class="record">
        Temp: +{{forecast.temp.day}} / +{{forecast.temp.night}}
      </div>
      <div class="record">
        Wind: {{forecast.wind.speed}}
      </div>
      <div class="record">
        {{forecast.wind.direction}}
      </div>

    `
})
export class ForecastCardComponent{ 
    @Input() forecast: any;
}