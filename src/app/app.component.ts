import { Component } from '@angular/core';
import {Http, HttpModule} from '@angular/http'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat:number = 51;
  lng:number = 10;
  zoom: number = 5;

  points: any[] = [];

  constructor(private http:Http) {

  }

  ngOnInit(){
    this.http.get("assets/points.json").subscribe(data => {
      this.points = data.json();
    });
  }
}
