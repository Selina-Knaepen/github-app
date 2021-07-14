import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }
  
  getUser(user: string) {
    return this.http.get(this.apiUrl + "/" + user)
  }
}
