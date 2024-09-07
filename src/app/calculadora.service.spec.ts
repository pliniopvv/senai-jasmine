import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sub return subtract correct value', () => {
    const num1 = 5;
    const num2 = 5;
    const result = service.sub(num1, num2);
    expect(result).toEqual(0);
  });

  it('should mul return multiplication correct value', () => {
    const num1 = 5;
    const num2 = 5;
    const result = service.mul(num1, num2);
    expect(result).toEqual(25);
  });

});
