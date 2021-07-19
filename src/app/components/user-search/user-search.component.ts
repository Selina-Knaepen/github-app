import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  searchUser: string = "";
  user: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  search(): void {
    this.userService.getUser(this.searchUser)
    .subscribe(user => {
      console.log(user);
      this.user = user;
      this.router.navigate(['/repo-list', { login: user.login }]);
    })
  }
}
