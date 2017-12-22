import { Component, OnInit } from '@angular/core';
import { SearchResService } from '../Services/search-res.service';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  
  
  pageEvent(pageEvent){
    this.Searchres.limit=pageEvent.pageSize;
    this.Searchres.page=pageEvent.pageIndex+1;
    this.Searchres.getValues();
  }
  checkBox(event){
    
    if(event.srcElement.checked=true){
      event.path[4].style.backgroundColor="#72d6fb"

    }
    else{
      event.path[4].style.backgroundColor="white"
    }
  }
  
  constructor(private Searchres:SearchResService) { }

  ngOnInit() {
    
    
    
  }

}
