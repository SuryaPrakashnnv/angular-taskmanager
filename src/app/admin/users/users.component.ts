import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:User[];

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(
        (response: User[]) => {
          this.users = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getRandom(){
    return Math.random()*1000;
  }
}
