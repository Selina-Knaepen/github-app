import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  searchUser: string = "";
  user!: User|string;
  hasError = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  search(): void {
    this.userService.getUser(this.searchUser)
    .subscribe(user => {
      this.user = user;

      if (user instanceof User) {
        this.hasError = false;
        this.router.navigate(['/repo-list', { login: user.login }]);
      } else {
        this.hasError = true;
      }
    });
  }
}
