import {  ElementRef , Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
  
})



export class NavBarComponent implements OnInit {
  private nativeElement;
  private fastsearch=false;
  

  constructor(private elementRef:ElementRef) { }



  ngOnInit() {
    
  }

}
