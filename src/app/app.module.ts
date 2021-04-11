import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from '../app/home/home.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer, reducer as UserReducer  } from './shared/ngrx/reducer';



@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,   
    StoreModule.forRoot({ load: counterReducer, user : UserReducer  }),
    AppRoutingModule,
    BrowserAnimationsModule,   
    HttpClientModule,
    HomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
