import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  add(a: number, b: number): number {
    return a + b;
  }
  sub(a: number, b: number): number {
    return a - b;
  }
  div(a: number, b: number): number {
    if (!b) throw new Error("Divisão por zero");
    return a / b;
  }
  mul(a: number, b: number): number {
    return a * b;
  }

}
