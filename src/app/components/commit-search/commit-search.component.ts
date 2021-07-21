import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commit-search',
  templateUrl: './commit-search.component.html',
  styleUrls: ['./commit-search.component.css']
})
export class CommitSearchComponent implements OnInit {
  commitTerm: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log("Searching for: " + this.commitTerm);
  }
}
