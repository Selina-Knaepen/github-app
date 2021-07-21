import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommitService } from '../../services/commit/commit.service';
import { CommitSearchComponent } from '../commit-search/commit-search.component';
 
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
    this.login = this.route.snapshot.paramMap.get('login');
    this.repoName = this.route.snapshot.paramMap.get('repoName');

    if (this.login !== null && this.repoName !== null) {
      this.commitService.getCommitsFromRepo(this.login, this.repoName)
      .subscribe(commits => {
        this.commits = commits;
      })
    }
  }

}
