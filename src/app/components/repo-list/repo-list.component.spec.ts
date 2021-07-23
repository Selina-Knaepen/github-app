import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Repo } from 'src/app/models/repo.model';
import { RepoService } from 'src/app/services/repo/repo.service';
import { RepoListComponent } from './repo-list.component';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;
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
      declarations: [ RepoListComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: {snapshot: {params: {login: ""}}} },
        { provide: RepoService, useValue: repoServiceStub },
        { provide: Router, useValue: {get: ""} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
