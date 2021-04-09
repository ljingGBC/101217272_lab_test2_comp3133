import { Injectable } from '@angular/core';

//import HttpClient
import { HttpClient } from '@angular/common/http';

//import Observable
//import { Observable } from 'rxjs/Observable';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexdataService {

  constructor(private http: HttpClient) { }

  // function to fetch data from https://api.spacexdata.com/v3/launches
  fetchData(): Observable<Object> {
    let url = 'https://api.spacexdata.com/v3/launches'
    return this.http.get(url);
  }

}
