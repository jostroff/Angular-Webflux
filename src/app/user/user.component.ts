import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
// import { UserService } from '../service/user.service'; //comes from here currently.
import {ActivatedRouteComponent} from '../activatedRoute/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  // constructor(private userService: UserService) {
      
  // }
  constructor(private userService: ActivatedRouteComponent) {
      
  }

  ngOnInit() {
    this.userService.find().subscribe(data => {
      this.user = data;
    });
  }
  
}
