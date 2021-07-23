import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Repo } from 'src/app/models/repo.model';
import { RepoService } from 'src/app/services/repo/repo.service';

import { RepoFilterComponent } from './repo-filter.component';

describe('RepoFilterComponent', () => {
  let component: RepoFilterComponent;
  let fixture: ComponentFixture<RepoFilterComponent>;
  let repoServiceStub: Partial<RepoService> = {
    getReposFromUser: function() {
      return of([new Repo(1, "HomeLight", "Lights", 0),
        new Repo(2, "Mongoose", "Bot", 2)]);
    },
    getReposSortByStars: function() {
      return of([new Repo(2, "Mongoose", "Bot", 2),
        new Repo(1, "HomeLight", "Lights", 0)])
    },
    getReposSortByUpdated: function() {
      return of([new Repo(1, "HomeLight", "Lights", 0),
      new Repo(2, "Mongoose", "Bot", 2)])
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoFilterComponent ],
      providers: [
        { provide: RepoService, useValue: repoServiceStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
