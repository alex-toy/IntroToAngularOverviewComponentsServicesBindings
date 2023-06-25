import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})  
export class UsersComponent implements OnInit{
  pageTitle : string = "user list";
  filteredUsers : IUser[] = [];
  users : IUser[] = [];
  showPhoneVisible : boolean = false;
  private _listFilter: string = "";
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.getFilteredUsers();
  }

  constructor(private userService: UserService) {  }

  showPhone() : void{
    this.showPhoneVisible = !this.showPhoneVisible;
  }

  getFilteredUsers() {
    if (this.listFilter !== ""){
      this.filteredUsers = this.users.filter(u => u.name.includes(this.listFilter));
    } else {
      this.filteredUsers = this.users;
    }
  }

  onStarClicked(rating: string) : void{
    this.pageTitle = "rating clicked " + rating;
  }
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: users => {
        this.users = users;
        this.filteredUsers = this.users;
      },
      error: error => console.log(error)
    });
  }
}
