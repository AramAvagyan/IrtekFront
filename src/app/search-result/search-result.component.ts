import { Component, OnInit } from '@angular/core';
import { SearchResService } from '../Services/search-res.service';


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
  checkBoxValueChange(event,id){
    
    if(event.checked==true){
      this.Searchres.addCheckSession(id)
      // for(let i=0;i<this.Searchres.Values.length;i++){
      //   if(this.Searchres.Values[i].id==id){
      //     this.Searchres.Values[i].check=true;
      //   }
      // }

    }
    else{
      this.Searchres.delCheckSession(id)
      // for(let i=0;i<this.Searchres.Values.length;i++){
      //   if(this.Searchres.Values[i].id==id){
      //     this.Searchres.Values[i].check=false;
      //   }
      // }
    }
  }

  

  
  constructor(private Searchres:SearchResService) { }

  ngOnInit() {
    
    
    
  }

}
