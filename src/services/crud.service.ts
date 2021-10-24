import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serverUrl = 'http://localhost:58527/api/Cities/'
  headers = new HttpHeaders({'Content-Type': 'application/json',
                            'Access-Control-Allow-Headers': 'Content-Type',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'});
  
  constructor(private httpClient: HttpClient) {
  }
  
  
  get(url: string, params: string) {
    return this.httpClient.get(this.serverUrl + url, {headers: this.headers, params:
        new HttpParams().set('char', params)
    });
  }
}
