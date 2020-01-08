import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNodesComponent } from './custom-nodes.component';

describe('CustomNodesComponent', () => {
  let component: CustomNodesComponent;
  let fixture: ComponentFixture<CustomNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
