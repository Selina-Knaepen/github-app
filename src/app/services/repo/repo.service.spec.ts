import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RepoService } from './repo.service';
import { Repo } from '../../models/repo.model';
import { of } from 'rxjs';

describe('RepoService', () => {
  let service: RepoService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        RepoService
      ]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RepoService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getReposFromUser should return expected repos', (done: DoneFn) => {
    const expectedRepos: Repo[] = 
    [new Repo(1, "HomeLight", "Lights", 1), new Repo(2, "Mongoose", "Bot", 0)];

    httpClientSpy.get.and.returnValue(of(expectedRepos));

    service.getReposFromUser("Selina").subscribe(
      repos => {
        expect(repos).toEqual(expectedRepos, 'expected Repos');
        done();
      },
      done.fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('getReposSortByStars should return expected repos', (done: DoneFn) => {
    const givenJson: any = 
    {items: [new Repo(1, "HomeLight", "Lights", 1), new Repo(2, "Mongoose", "Bot", 0)]};
    const expectedRepos: Repo[] = 
    [new Repo(1, "HomeLight", "Lights", 1), new Repo(2, "Mongoose", "Bot", 0)];

    httpClientSpy.get.and.returnValue(of(givenJson));

    service.getReposSortByStars("Selina").subscribe(
      repos => {
        expect(repos).toEqual(expectedRepos, 'expected Repos');
        done();
      },
      done.fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('getReposSortByUpdated should return expected repos', (done: DoneFn) => {
    const givenJson: any = 
    {items: [new Repo(1, "HomeLight", "Lights", 1), new Repo(2, "Mongoose", "Bot", 0)]};
    const expectedRepos: Repo[] = 
    [new Repo(1, "HomeLight", "Lights", 1), new Repo(2, "Mongoose", "Bot", 0)];

    httpClientSpy.get.and.returnValue(of(givenJson));

    service.getReposSortByUpdated("Selina").subscribe(
      repos => {
        expect(repos).toEqual(expectedRepos, 'expected Repos');
        done();
      },
      done.fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
