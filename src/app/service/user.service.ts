import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs'; //NOTE: Need rxjs instead of rxjs/Observable.
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
    // const id$ = route.params.pipe(map(params => params.id));
  }
  
  
  // constructor(private route: ActivatedRoute) {
  //   const id$ = route.params.pipe(map(params => params.id));
  // }
  

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }


  //New...
  public find(): Observable<User>{
    return this.http.get<User>(this.usersUrl + '/' + 1); //users/{id} = /users/{id}
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
