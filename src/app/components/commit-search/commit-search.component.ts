import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommitService } from '../../services/commit/commit.service';

@Component({
  selector: 'app-commit-search',
  templateUrl: './commit-search.component.html',
  styleUrls: ['./commit-search.component.css']
})
export class CommitSearchComponent implements OnInit {
  commitTerm: string = "";
  @Input()
  login!: string|null;
  @Input()
  repo!: string|null;
  @Output()
  onCommitsUpdated = new EventEmitter<any>();

  constructor(private commitService: CommitService) { }

  ngOnInit(): void {
  }

  search() {
    if (this.login !== null && this.repo !== null) {
      this.commitService.getCommitByTerm(this.login, this.repo, this.commitTerm)
      .subscribe(commits => {
        this.onCommitsUpdated.emit(commits);
      });
    }
  }
}
