import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxKitLibComponent } from './ngx-kit-lib.component';

describe('NgxKitLibComponent', () => {
  let component: NgxKitLibComponent;
  let fixture: ComponentFixture<NgxKitLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxKitLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxKitLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
