import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpouseDataComponent } from './spouse-data.component';

describe('SpouseDataComponent', () => {
  let component: SpouseDataComponent;
  let fixture: ComponentFixture<SpouseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpouseDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpouseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
