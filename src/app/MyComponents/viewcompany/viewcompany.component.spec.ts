import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompanyComponent } from './viewcompany.component';

describe('ViewcompanyComponent', () => {
  let component: ViewcompanyComponent;
  let fixture: ComponentFixture<ViewcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
