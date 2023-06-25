import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  pageTitle : string = "user list";
  users : any[] = [
    {id:1, name:"alex", email: 'alex@test.fr', phone:1234, country: 'lebanon'},
    {id:2, name:"seb", email: 'seb@test.fr', phone:9876, country: 'france'},
    {id:3, name:"kate", email: 'kate@test.fr', phone:4257, country: 'spain'},
  ];
}
