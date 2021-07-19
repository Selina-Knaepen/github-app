import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RepoService {
  apiUrl = "https://api.github.com/users";

  constructor(private http: HttpClient) { }

  getReposFromUser(user: string) {
    return this.http.get(`${this.apiUrl}/${user}/repos`);
  }
}
