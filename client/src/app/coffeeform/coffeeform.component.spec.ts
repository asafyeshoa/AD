import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeformComponent } from './coffeeform.component';

describe('CoffeeformComponent', () => {
  let component: CoffeeformComponent;
  let fixture: ComponentFixture<CoffeeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
