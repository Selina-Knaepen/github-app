import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitSearchComponent } from './commit-search.component';

describe('CommitSearchComponent', () => {
  let component: CommitSearchComponent;
  let fixture: ComponentFixture<CommitSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitSearchComponent ]
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
