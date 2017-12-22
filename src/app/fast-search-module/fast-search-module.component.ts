import { SearchResService } from './../Services/search-res.service';
import { Component, OnInit, Inject } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { Services } from '@angular/core/src/view';


@Component({
  selector: 'app-fast-search-module',
  templateUrl: './fast-search-module.component.html',
  styleUrls: ['./fast-search-module.component.css'],
})

export class FastSearchModuleComponent implements OnInit {
  
  ActTitle:any;
  ActNumber:any;
  ActYear:any;


  constructor(public SearchRes: SearchResService) { }

  ngOnInit() {
    this.ActTitle=this.SearchRes.FastSearchModel.Act_Title;
    this.ActNumber=this.SearchRes.FastSearchModel.Act_Number;
    this.ActYear=this.SearchRes.FastSearchModel.Act_Year;
    
  }

  Search(){
    this.SearchRes.ChangeActParam(this.ActTitle,this.ActNumber,this.ActYear)
    this.SearchRes.getValues();
  }

}
