import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CommitService } from './commit.service';
import { Commit } from '../../models/commit.model';
import { Author } from '../../models/author.model';
import { of } from 'rxjs';

describe('CommitService', () => {
  let service: CommitService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        CommitService
      ]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CommitService(httpClientSpy as any);
  });

  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCommitsFromRepo should return expected commits', (done: DoneFn) => {
    const givenJson: any = [
      {sha: "sha1", commit: {message: "Initial commit", author: {name: "Selina", date: "07-22-2021"}}},
      {sha: "sha2", commit: {message: "Add button", author: {name: "Selina", date: "07-22-2021"}}}
    ]
    const expectedCommits: Commit[] =
    [new Commit("sha1", "Initial commit", new Author("Selina", new Date("07-22-2021"))),
      new Commit("sha2", "Add button", new Author("Selina", new Date("07-22-2021")))];

    httpClientSpy.get.and.returnValue(of(givenJson));

    service.getCommitsFromRepo("Selina", "Mongoose").subscribe(
      commits => {
        expect(commits).toEqual(expectedCommits, 'expected Commits');
        done();
      },
      done.fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('getCommitByTerm should return expected commits', (done: DoneFn) => {
    const givenJson: any = {
      items: 
      [
        {sha: "sha2", commit: {message: "Add button", author: {name: "Selina", date: "07-22-2021"}}}
      ]
    }
    const expectedCommits: Commit[] =
    [new Commit("sha2", "Add button", new Author("Selina", new Date("07-22-2021")))];

    httpClientSpy.get.and.returnValue(of(givenJson));

    service.getCommitByTerm("Selina", "Mongoose", "Add").subscribe(
      commits => {
        expect(commits).toEqual(expectedCommits, 'expected Commits');
        done();
      },
      done.fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
