import { Component, OnInit } from '@angular/core';
import { CommitService } from '../../services/commit/commit.service';

@Component({
  selector: 'app-commit-search',
  templateUrl: './commit-search.component.html',
  styleUrls: ['./commit-search.component.css']
})
export class CommitSearchComponent implements OnInit {
  commitTerm: string = "";

  constructor(private commitService: CommitService) { }

  ngOnInit(): void {
  }

  search() {
    this.commitService.getCommitByTerm("Selina-Knaepen", "HomeLight", this.commitTerm)
    .subscribe(commits => {
      console.log(commits);
    });
  }
}
