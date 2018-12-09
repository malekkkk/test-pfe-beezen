import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingStorComponent } from './shopping-stor.component';

describe('ShoppingStorComponent', () => {
  let component: ShoppingStorComponent;
  let fixture: ComponentFixture<ShoppingStorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingStorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingStorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
