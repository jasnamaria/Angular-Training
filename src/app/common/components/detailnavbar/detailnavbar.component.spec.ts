import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnavbarComponent } from './detailnavbar.component';

describe('DetailnavbarComponent', () => {
  let component: DetailnavbarComponent;
  let fixture: ComponentFixture<DetailnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailnavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
