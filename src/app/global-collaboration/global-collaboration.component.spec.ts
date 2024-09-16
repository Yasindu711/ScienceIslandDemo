import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCollaborationComponent } from './global-collaboration.component';

describe('GlobalCollaborationComponent', () => {
  let component: GlobalCollaborationComponent;
  let fixture: ComponentFixture<GlobalCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalCollaborationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
