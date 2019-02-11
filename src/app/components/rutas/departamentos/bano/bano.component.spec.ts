import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanoComponent } from './bano.component';

describe('BanoComponent', () => {
  let component: BanoComponent;
  let fixture: ComponentFixture<BanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
