import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../services/user/user.service';
import { UserSearchComponent } from './user-search.component';
import { HttpClientModule } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { of } from 'rxjs';


describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;
  let userServiceStub: Partial<UserService> = {getUser: function() {
    return of(new User(1, "Selina", "Selina Knaepen", "url"))
  }};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchComponent ],
      imports: [HttpClientModule],
      providers: [
        { provide: UserService, useValue: userServiceStub },
        { provide: Router, useValue: null }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
