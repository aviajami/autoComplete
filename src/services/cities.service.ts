import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from './crud.service';

const GET_CITIES_URL = 'cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private citiesBS = new BehaviorSubject([]);
  cities = this.citiesBS.asObservable();

  constructor(private crudService: CrudService) { }

  
  getCitiesList(characters: string) {
    this.crudService.get(GET_CITIES_URL, characters)?.subscribe((data: any) => {
      console.log(data);
      this.citiesBS.next(data)
    }, error => {
      console.log("Something wrong here");
    });
  }
}
