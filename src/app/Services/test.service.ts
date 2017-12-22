import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class TestService {

  constructor(private http:Http){	}

  Values:any;

  getValues(){
    this.Values=this.http.get("/api/values").map(response=>response.json()); 
    return this.Values;
  }

}
