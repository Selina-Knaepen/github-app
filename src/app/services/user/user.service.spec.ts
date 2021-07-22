import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';
import { User } from 'src/app/models/user.model';
import { of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        UserService
      ]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UserService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected user and call HttpClient once', (done: DoneFn) => {
    const expectedUser: User = new User(1, "Selina", "Selina Knaepen", "url");
    
    httpClientSpy.get.and.returnValue(of(expectedUser));

    service.getUser("Selina").subscribe(
      user => {
        expect(user).toEqual(expectedUser, 'expected User');
        done();
      },
      done.fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
