import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdInputModule,
} from '@angular/material';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { CoverpageComponent } from './coverpage/coverpage.component';
import { CarsComponent } from './cars/cars.component';
import { LeaseComponent } from './lease/lease.component';
import { CarThumbnailComponent } from './cars/car-thumbnail.component';


@NgModule({
  declarations: [
    AppComponent,
    CoverpageComponent,
    CarsComponent,
    LeaseComponent,
    CarThumbnailComponent
  ],
  providers: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'cover', pathMatch: 'full' },
      { path: 'cover', component: CoverpageComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'lease', component: LeaseComponent}
    ]),
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
