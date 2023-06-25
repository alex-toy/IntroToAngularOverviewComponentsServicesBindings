import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  pageTitle : string = "user list";
  filteredUsers : IUser[] = [];
  users : IUser[] = [
    {id:1, name:"alex", email: 'alex@test.fr', phone:1234, country: 'lebanon'},
    {id:2, name:"seb", email: 'seb@test.fr', phone:9876, country: 'france'},
    {id:3, name:"kate", email: 'kate@test.fr', phone:4257, country: 'spain'},
  ];
  showPhoneVisible : boolean = false;
  private _listFilter: string = "";
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.getFilteredUsers();
  }

  showPhone() : void{
    this.showPhoneVisible = !this.showPhoneVisible;
  }

  getFilteredUsers() {
    this.filteredUsers = this.users.filter(u => u.name.includes(this.listFilter));
  }
  
  ngOnInit(): void {
    console.log("ngOnInit")
  }
}
