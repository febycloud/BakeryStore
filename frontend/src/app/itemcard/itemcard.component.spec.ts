import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcardComponent } from './itemcard.component';

describe('ItemcardComponent', () => {
  let component: ItemcardComponent;
  let fixture: ComponentFixture<ItemcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
