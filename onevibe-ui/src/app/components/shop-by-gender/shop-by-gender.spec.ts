import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByGender } from './shop-by-gender';

describe('ShopByGender', () => {
  let component: ShopByGender;
  let fixture: ComponentFixture<ShopByGender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopByGender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByGender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
