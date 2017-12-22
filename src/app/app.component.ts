import { OnInit } from '@angular/core';
import { TestService } from './Services/test.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent implements OnInit{
  title :any;


  constructor (private test: TestService){} 

  ngOnInit() {
    //this.girls=this.card.girls;
    this.test.getValues().subscribe(prop=>{this.title=prop})
  }

}
