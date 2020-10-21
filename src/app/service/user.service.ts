import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, of } from 'rxjs'; //NOTE: Need rxjs instead of rxjs/Observable.
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
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
    // return this.http.get<User[]>(this.usersUrl);
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(() => of([{ id: '1', name: 'Example', email: 'example@example.com' }] as User[]))
    );
  }


  //New...
  public find(id: string): Observable<User>{
    return this.http.get<User>(`${this.usersUrl}/${id}`).pipe(
      catchError(() => of({ id, name: 'Example', email: 'example@example.com' } as User))
    ); //users/{id} = /users/{id}
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
