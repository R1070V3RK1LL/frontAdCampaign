import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdCampaignComponent } from './add-ad-campaign.component';

describe('AddAdCampaignComponent', () => {
  let component: AddAdCampaignComponent;
  let fixture: ComponentFixture<AddAdCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
