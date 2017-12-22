import { SearchResService } from './Services/search-res.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MainComponent } from './main/main.component';
import { TestService } from './Services/test.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FastSearchComponent } from './fast-search/fast-search.component';
import { NewsBlockComponent } from './news-block/news-block.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AdvSearchComponent } from './adv-search/adv-search.component';
import { FastSearchModuleComponent } from './fast-search-module/fast-search-module.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { HelpComponent } from './help/help.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule, MatPaginator, MatPaginatorModule, MatCheckboxModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FastSearchComponent,
    NewsBlockComponent,
    SearchResultComponent,
    MainComponent,
    AdvSearchComponent,
    FastSearchModuleComponent,
    DictionaryComponent,
    HelpComponent
  ],
  imports: [
 
    RouterModule.forRoot(
      [
        { path: 'Main', component: MainComponent },
        { path: 'FastSearch', component: FastSearchComponent },
        { path: 'AdvSearch',      component: AdvSearchComponent },
        {path: 'SearchRes',   component: SearchResultComponent},
        { path: '',
          redirectTo: 'Main',
          pathMatch: 'full'
        },
        { path: '**', component: MainComponent }
      ]
    ),
    
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatPaginatorModule,
    HttpModule,
  ],
  exports: [BrowserModule],
  providers: [SearchResService],
  bootstrap: [AppComponent]
})
export class AppModule { }
