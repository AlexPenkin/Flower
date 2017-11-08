import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Fertilizer} from './fertilizer';
import {Element, N, P, K} from './Elements';

@Injectable()
export class FertilizerService {

  fertilizers: Fertilizer[] = [];
  fertilizerKeys: string[] = [];

  constructor() {
    this.fertilizers.push(new Fertilizer('Буйский хуй', 'Буйский завод', {N: new N(100), P: new P(100), K: new K(100)}));
    this.fertilizers.push(new Fertilizer('Calcium', 'Valagro', {N: new N(200), P: new P(40), K: new K(155)}));
    this.fertilizers.push(new Fertilizer('МФК', 'Советская залупа', {N: new N(121), P: new P(80), K: new K(160)}));
    console.log(this.fertilizers)
    this.fertilizerKeys = Object.keys(this.fertilizers[0].composition);
   }

   get(): Fertilizer[] {
    return this.fertilizers;
   }

   getFertilizerKeys(): string[] {
     return this.fertilizerKeys;
   }

}
