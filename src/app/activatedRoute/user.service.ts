import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs'; //NOTE: Need rxjs instead of rxjs/Observable.
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable()

// @Component({
//   /**  */
// })

export class ActivatedRouteComponent {
  // private usersUrl: string;
  // private id: string;
  // private route: ActivatedRoute;
  constructor(route: ActivatedRoute) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    // this.usersUrl = 'http://localhost:8080/users';
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // // route.data includes both `data` and `resolve`
    const user = route.data.pipe(map(d => d.user));
  }
  // public find(): Observable<User>{
    // return this.http.get<User>(this.usersUrl + '/' + id); //users/{id} = /users/{id}
    // const id$ = this.route.params.pipe(map(params => params.id));
  // }
  // public find(): Observable<User>{
    // return this.route.get<User>(this.usersUrl + '/' + 1); //users/{id} = /users/{id}
  // }
}
