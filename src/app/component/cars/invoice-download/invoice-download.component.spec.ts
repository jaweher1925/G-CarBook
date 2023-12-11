import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDownloadComponent } from './invoice-download.component';

describe('InvoiceDownloadComponent', () => {
  let component: InvoiceDownloadComponent;
  let fixture: ComponentFixture<InvoiceDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
