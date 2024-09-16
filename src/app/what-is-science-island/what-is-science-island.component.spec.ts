import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsScienceIslandComponent } from './what-is-science-island.component';

describe('WhatIsScienceIslandComponent', () => {
  let component: WhatIsScienceIslandComponent;
  let fixture: ComponentFixture<WhatIsScienceIslandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsScienceIslandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsScienceIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
