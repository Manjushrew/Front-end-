import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './Table component.html',
  styleUrls: ['./Table component.css']
})
export class AppComponent implements OnInit {

  title = 'JSONServerAPI';

  constructor(private rs : RestService){}

  columns = ["S NO", "Name", "User Name", "city", "pincode", "company name"];

  index = ["id", "Name", "User Name", "city", "pincode", "company name"];

  users : Users[] = [];

  ngOnInit(): void {
    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.users = response;
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }

