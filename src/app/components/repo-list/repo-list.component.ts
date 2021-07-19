import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  login: string|null = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.login = this.route.snapshot.paramMap.get('login');

    
  }
}
