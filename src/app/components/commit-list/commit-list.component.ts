import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommitService } from '../../services/commit/commit.service';
 
@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit {
  login: string|null = null;
  repoName: string|null = null;
  commits: any;

  constructor(private route: ActivatedRoute, private commitService: CommitService) { }

  ngOnInit(): void {
    this.login = this.route.snapshot.params['login'];
    this.repoName = this.route.snapshot.params['repoName'];

    if (this.login !== null && this.repoName !== null) {
      this.commitService.getCommitsFromRepo(this.login, this.repoName)
      .subscribe(commits => {
        this.commits = commits;
      })
    }
  }

  updateCommits(commits: any) {
    this.commits = commits;
  }
}
