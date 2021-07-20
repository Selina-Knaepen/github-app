import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Commit } from '../../models/commit.model';
import { Author } from '../../models/author.model';

@Injectable()
export class CommitService {
  apiUrl = "https://api.github.com/repos";

  constructor(private http: HttpClient) { }

  getCommitsFromRepo(user: string, repo: string) {
    return this.http.get(`${this.apiUrl}/${user}/${repo}/commits?per_page=20`).pipe(
      map((res: any) => this.mapCommitList(res))
    );
  }

  mapCommitList(json: any) {
    let commits = [];

    for (let object of json) {
      commits.push(this.mapCommit(object.commit, object.sha));
    }

    return commits;
  }

  mapCommit(json: any, sha: string) {
    let commit = new Commit(sha, json.message, this.mapAuthor(json.author));

    return commit;
  }

  mapAuthor(json: any) {
    let author = new Author(json.name, new Date(json.date));

    return author;
  }
}
