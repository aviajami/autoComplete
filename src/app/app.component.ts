import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, SubscriptionLike } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { City } from 'src/models/city.model';
import { CitiesService as CitiesService } from 'src/services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Auto Complete';

  cities: Array<City> = [];

  citiesSub : SubscriptionLike;

  userData: any[] = [];

  lastkeydown1: number = 0;
  subscription: any;

  constructor(private citiesService: CitiesService) {
  }  

  ngOnInit() {
    this.citiesSub = this.citiesService.cities.pipe(
      debounceTime(500))
      .subscribe(data => {
        Object.assign(this.cities, data)
        console.log('cities: ', this.cities); 
      },
    error => {
      console.log("Something wrong here");
    });
  }

  ngOnDestroy() {
    this.citiesSub.unsubscribe();
  }

  getUserIdsFirstWay(event: KeyboardEvent) {
    let input = (<HTMLInputElement>document.getElementById('userIdFirstWay')).value;
    this.userData = [];
    if (input.length > 2) {

      this.citiesService.getCitiesList(input);
  
    }
  }  
}
