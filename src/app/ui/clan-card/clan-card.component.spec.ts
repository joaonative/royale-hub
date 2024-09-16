import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanCardComponent } from './clan-card.component';

describe('ClanCardComponent', () => {
  let component: ClanCardComponent;
  let fixture: ComponentFixture<ClanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClanCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
