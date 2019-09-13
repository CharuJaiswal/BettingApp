import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlisnerComponent } from './hostlisner.component';

describe('HostlisnerComponent', () => {
  let component: HostlisnerComponent;
  let fixture: ComponentFixture<HostlisnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlisnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlisnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
