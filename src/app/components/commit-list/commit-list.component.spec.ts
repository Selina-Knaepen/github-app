import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CommitListComponent } from './commit-list.component';
import { CommitService } from '../../services/commit/commit.service';
import { of } from 'rxjs';
import { Commit } from 'src/app/models/commit.model';
import { Author } from 'src/app/models/author.model';

describe('CommitListComponent', () => {
  let component: CommitListComponent;
  let fixture: ComponentFixture<CommitListComponent>;
  let commitServiceStub: Partial<CommitService> = {
    getCommitsFromRepo: function() {
      return of([new Commit("sha1", "Initial Commit", new Author("Selina", new Date("07-22-2021"))),
        new Commit("sha2", "Add button", new Author("Selina", new Date("07-22-2021")))]);
    },
    getCommitByTerm: function() {
      return of([new Commit("sha2", "Add button", new Author("Selina", new Date("07-22-2021")))]);
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitListComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: {snapshot: {params: {login: "", repoName: ""}}} },
        { provide: CommitService, useValue: commitServiceStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
