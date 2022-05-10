import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  li:any;
  headers:any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  getGameList(){
    this.http.get(environment.baseurl+'/gameLists')
    .subscribe(Response => { 
      // If response comes hideloader() function is called
      // to hide that loader      
      console.log(Response)
      this.li=Response;
      //this.lis=this.li.list;
      console.log(this.li);
      var headers = Object.keys(this.li[0]);
      console.log(headers[0]);
    });
  }
}
