import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL = "";

  constructor(private httpClient: HttpClient) {}

  getUsersold(): Observable<IUser[]> {
    var userObservable : Observable<IUser[]> = this.httpClient.get<IUser[]>(this.userURL);
    return userObservable.pipe(
      tap(u => console.log(u)),
      // catchError(this.handleError)
    );
  }

  handleError(error : HttpErrorResponse){
    console.log(error)
  }

  getUsers(): Observable<IUser[]> {
    return of([
      {id:1, name:"alex", email: 'alex@test.fr', phone:1234, country: 'lebanon', rating:4},
      {id:2, name:"seb", email: 'seb@test.fr', phone:9876, country: 'france', rating:5},
      {id:3, name:"kate", email: 'kate@test.fr', phone:4257, country: 'spain', rating:3},
    ]);
  }

}
