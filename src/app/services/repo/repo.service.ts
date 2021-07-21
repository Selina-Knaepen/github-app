import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Repo } from '../../models/repo.model';

@Injectable()
export class RepoService {
  apiUrl = "https://api.github.com/users";

  constructor(private http: HttpClient) { }

  getReposFromUser(user: string) {
    return this.http.get(`${this.apiUrl}/${user}/repos`).pipe(
      map((res: any) => this.mapRepoList(res))
    );
  }

  mapRepoList(json: any) {
    let repos = [];

    for(let object of json) {
      repos.push(this.mapRepo(object));
    }

    return repos;
  }

  mapRepo(json: any) {
    let repo = new Repo(json.id, json.name, json.description, json.stargazers_count);

    return repo;
  }
}
