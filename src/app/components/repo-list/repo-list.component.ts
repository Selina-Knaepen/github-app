import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoService } from '../../services/repo/repo.service'

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  login: string|null = null;
  repos: any;

  constructor(private route: ActivatedRoute, private repoService: RepoService) { }

  ngOnInit(): void {
    this.login = this.route.snapshot.paramMap.get('login');

    if (this.login !== null) {
      this.repoService.getReposFromUser(this.login)
      .subscribe(repos => {
        this.repos = repos;
      });
    }
  }
}
