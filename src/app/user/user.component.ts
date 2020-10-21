import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
// import { UserService } from '../service/user.service'; //comes from here currently.
import { UserService } from '../service/user.service';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent { // implements OnInit - Doesn't actually!

  user$: Observable<User>; //Yes, needs $ sign to function properly.

  constructor(route: ActivatedRoute, userService: UserService) {
    this.user$ = route.params.pipe(
      map(params => params.id),
      switchMap(id => userService.find(id))
    );
  }
}
