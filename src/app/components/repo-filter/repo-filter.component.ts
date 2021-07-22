import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RepoService } from '../../services/repo/repo.service';

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
  @Output()
  onReposUpdated = new EventEmitter<any>();

  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.selectedFilter = this.filterOptions[0];
  }

  valueChanged(filter: any) {
    this.selectedFilter = filter;

    if (this.login !== null) {
      switch (this.selectedFilter) {
        case "Name":
          this.repoService.getReposFromUser(this.login)
          .subscribe(repos => {
            this.onReposUpdated.emit(repos);
          });
          break;
        case "Stars":
          this.repoService.getReposSortByStars(this.login)
          .subscribe(repos => {
            this.onReposUpdated.emit(repos);
          });
          break;
        case "Updated":
          this.repoService.getReposSortByUpdated(this.login)
          .subscribe(repos => {
            this.onReposUpdated.emit(repos);
          });
          break;
        default:
          console.log("No filter has been given")
          break;
      }
    }
  }
}
