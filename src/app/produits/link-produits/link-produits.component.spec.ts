import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkProduitsComponent } from './link-produits.component';

describe('LinkProduitsComponent', () => {
  let component: LinkProduitsComponent;
  let fixture: ComponentFixture<LinkProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
