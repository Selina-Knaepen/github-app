import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoService } from '../../services/repo/repo.service'

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  login: string|null = null;
  repos: any;

  constructor(private route: ActivatedRoute, private repoService: RepoService, 
    private router: Router) { }

  ngOnInit(): void {
    this.login = this.route.snapshot.paramMap.get('login');

    if (this.login !== null) {
      this.repoService.getReposFromUser(this.login)
      .subscribe(repos => {
        this.repos = repos;
      });
    }
  }

  showCommits(name: string) {
    this.router.navigate(['/commit-list', {login: this.login, repoName: name}]);
  }

  updateRepos(repos: any) {
    this.repos = repos;
  }
}
