import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchResService {
  FastSearchModel={
    Act_Title:"",
    Act_Number:"",
    Act_Year:""
    }

  page=1;
  limit=20;
  listLenght=1;

  constructor(private http:Http) { }

  ChangeActParam(ActTitle,ActNumber,ActYear){
    this.FastSearchModel.Act_Title=ActTitle;
    this.FastSearchModel.Act_Number=ActNumber;
    this.FastSearchModel.Act_Year=ActYear;
  }

  Values:any;
  
    getValues(){
      return this.http.get(
        "/Services/GetActs"+"?page="+this.page+"&limit="+this.limit+"&Searchstring="+JSON.stringify(this.FastSearchModel)
      ).map(response=>response.json()).map(response=>{this.Values=response.records;this.listLenght=response.total})
      .subscribe(); 
       
      
    }
  

}
