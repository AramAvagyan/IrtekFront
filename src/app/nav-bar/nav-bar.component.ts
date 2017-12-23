import {  ElementRef , Component, OnInit } from '@angular/core';


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
