import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Commit } from '../../models/commit.model';
import { Author } from '../../models/author.model';

@Injectable()
export class CommitService {
  apiUrl = "https://api.github.com";

  constructor(private http: HttpClient) { }

  getCommitsFromRepo(user: string, repo: string) {
    return this.http.get(`${this.apiUrl}/repos/${user}/${repo}/commits?per_page=20`).pipe(
      map((res: any) => this.mapCommitList(res))
    );
  }

  getCommitByTerm(user: string, repo: string, term: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/vnd.github.cloak-preview+json'
      })
    };

    return this.http.get(`${this.apiUrl}/search/commits?per_page&q=repo:${user}/${repo}+${term.replace(/ /g,"+")}`, 
    httpOptions).pipe(
      map((res: any) => this.mapCommitList(res.items))
    );
  }

  private mapCommitList(json: any) {
    let commits = [];

    for (let object of json) {
      commits.push(this.mapCommit(object.commit, object.sha));
    }

    return commits;
  }

  private mapCommit(json: any, sha: string) {
    let commit = new Commit(sha, json.message, this.mapAuthor(json.author));

    return commit;
  }

  private mapAuthor(json: any) {
    let author = new Author(json.name, new Date(json.date));

    return author;
  }
}
