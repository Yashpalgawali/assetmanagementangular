import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Asset Management';
  constructor(){
    // setTimeout(()=>{
    //   this.title="Changed title after 2 seconds"
    // },2000);
  }
}

