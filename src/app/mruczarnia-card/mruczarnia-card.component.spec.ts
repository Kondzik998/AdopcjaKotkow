import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MruczarniaCardComponent } from './mruczarnia-card.component';

describe('MruczarniaCardComponent', () => {
  let component: MruczarniaCardComponent;
  let fixture: ComponentFixture<MruczarniaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MruczarniaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MruczarniaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
