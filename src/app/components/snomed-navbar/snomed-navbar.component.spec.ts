import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SnomedNavbarComponent } from './snomed-navbar.component';

describe('SnomedNavbarComponent', () => {
  let component: SnomedNavbarComponent;
  let fixture: ComponentFixture<SnomedNavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SnomedNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnomedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
