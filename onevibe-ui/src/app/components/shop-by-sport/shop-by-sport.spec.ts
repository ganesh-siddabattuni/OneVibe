import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBySport } from './shop-by-sport';

describe('ShopBySport', () => {
  let component: ShopBySport;
  let fixture: ComponentFixture<ShopBySport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopBySport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopBySport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
