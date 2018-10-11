import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //I need TestService
 constructor(private svc:TestService,private http:HttpClient){
    this.svc.printToConsole("Got the service");
 }
 ngOnInit()
 {
  let obs =  this.http.get('https://api.github.com/users/neha382852');
  obs.subscribe((response)=>console.log(response));

 }
}
