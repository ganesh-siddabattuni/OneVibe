import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaBanner } from './mega-banner';

describe('MegaBanner', () => {
  let component: MegaBanner;
  let fixture: ComponentFixture<MegaBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegaBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
