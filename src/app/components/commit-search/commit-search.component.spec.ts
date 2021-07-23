import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Author } from 'src/app/models/author.model';
import { Commit } from 'src/app/models/commit.model';
import { CommitService } from 'src/app/services/commit/commit.service';

import { CommitSearchComponent } from './commit-search.component';

describe('CommitSearchComponent', () => {
  let component: CommitSearchComponent;
  let fixture: ComponentFixture<CommitSearchComponent>;
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
      declarations: [ CommitSearchComponent ],
      providers: [
        { provide: CommitService, useValue: commitServiceStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
