import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAdComponent } from './modify-ad.component';

describe('ModifyAdComponent', () => {
  let component: ModifyAdComponent;
  let fixture: ComponentFixture<ModifyAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
