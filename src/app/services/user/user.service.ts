import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {
  apiUrl = "https://api.github.com/users";

  constructor(private http: HttpClient) { }

  getUser(user: string) {
    return this.http.get<User>(`${this.apiUrl}/${user}`).pipe(
      map((res: any) => this.mapUser(res))
    );
  }

  private mapUser(json: any) {
    let user = new User(json.id, json.login, json.name, json.avatar_url);

    return user;
  }
}
