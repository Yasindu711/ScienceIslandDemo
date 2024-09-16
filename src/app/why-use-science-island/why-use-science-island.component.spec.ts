import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUseScienceIslandComponent } from './why-use-science-island.component';

describe('WhyUseScienceIslandComponent', () => {
  let component: WhyUseScienceIslandComponent;
  let fixture: ComponentFixture<WhyUseScienceIslandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUseScienceIslandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyUseScienceIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
