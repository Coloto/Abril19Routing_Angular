import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosHijoComponent } from './comentarios-hijo.component';

describe('ComentariosHijoComponent', () => {
  let component: ComentariosHijoComponent;
  let fixture: ComponentFixture<ComentariosHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentariosHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentariosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
