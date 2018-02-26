import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor (private http: Http) {
    console.log('AppService initialized');
  }

  getData() {
    console.log('AppService : getData()');
    return this.http.get('http://localhost:8080/callcenter/rest/getCallDetails')
      .map(res => res.json()); // http://localhost:8080/callcenter/rest/getCallDetails, http://localhost:8080/SpringJersey/rest/fetch/getData
  }
}
