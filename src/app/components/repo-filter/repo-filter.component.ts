import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-filter',
  templateUrl: './repo-filter.component.html',
  styleUrls: ['./repo-filter.component.css']
})
export class RepoFilterComponent implements OnInit {
  filterOptions: string[] = ["Name", "Stars", "Updated"]
  selectedFilter!: string;
  @Input()
  login!: string|null;

  constructor() { }

  ngOnInit(): void {
    this.valueChanged(this.filterOptions[0]);
  }

  valueChanged(filter: any) {
    this.selectedFilter = filter;

    switch (this.selectedFilter) {
      case "Name":
        break;
      case "Stars":
        break;
      case "Updated":
        break;
      default:
        console.log("No filter has been given")
        break;
    }
  }
}
