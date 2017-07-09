import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import {MarkerCluster } from './marker-cluster'

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9-lrc-Laf424_OG5luxTBImVy8OxdG-Q'
    })
  ],
  providers: [],
  declarations: [ AppComponent,MarkerCluster ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
