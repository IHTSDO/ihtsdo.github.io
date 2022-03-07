import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SnomedFooterComponent } from './snomed-footer.component';

describe('SnomedFooterComponent', () => {
  let component: SnomedFooterComponent;
  let fixture: ComponentFixture<SnomedFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SnomedFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnomedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
