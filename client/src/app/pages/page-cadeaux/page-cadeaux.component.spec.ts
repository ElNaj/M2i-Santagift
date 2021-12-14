import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCadeauxComponent } from './page-cadeaux.component';

describe('PageCadeauxComponent', () => {
  let component: PageCadeauxComponent;
  let fixture: ComponentFixture<PageCadeauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCadeauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCadeauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
