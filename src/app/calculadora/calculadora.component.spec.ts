import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sum correct value', () => {
    component.num1 = 5;
    component.num2 = 5;
    component.sum();
    expect(component.result).toEqual(10);
  });

  it('should onChange change the NgModel from inputs', fakeAsync(() => {
    const de = fixture.debugElement;
    const value1 = 5;
    const value2 = 6;
    const num1field = de.query(By.css('input[name="num1"]')).nativeElement;
    const num2field = de.query(By.css('input[name="num2"]')).nativeElement;

    num1field.focus();
    num2field.focus();

    num1field.value = value1;
    num2field.value = value2;
    num1field.dispatchEvent(new Event('input'));
    num2field.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();

    expect(component.num1).toEqual(value1);
    expect(component.num2).toEqual(value2);
  }));

});
