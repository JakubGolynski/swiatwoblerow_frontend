import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsGetComponent } from './offer-details-get.component';

describe('OfferDetailsGetComponent', () => {
  let component: OfferDetailsGetComponent;
  let fixture: ComponentFixture<OfferDetailsGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferDetailsGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDetailsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
