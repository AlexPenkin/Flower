import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import {Fertilizer} from './fertilizer';
import {Element, N, P, K} from './Elements';
import { FertilizerList } from './fertilizersList';

@Injectable()
export class FertilizerService {

  fertilizers: Fertilizer[] = [];
  lists: FertilizerList[] = [];
  fertilizerList: FertilizerList = new FertilizerList('Test');
  fertilizerListTwo: FertilizerList = new FertilizerList('Test2');
  fertilizerKeys: string[] = [];

  constructor() {
    this.fertilizerList.add(new Fertilizer('Буйский хуй', 'Буйский завод', {N: new N(100), P: new P(100), K: new K(100)}));
    this.fertilizerList.add(new Fertilizer('Calcium', 'Valagro', {N: new N(200), P: new P(40), K: new K(155)}));
    this.fertilizerList.add(new Fertilizer('МФК', 'Советская залупа', {N: new N(121), P: new P(80), K: new K(160)}));
    this.fertilizerList.add(new Fertilizer('МФК', 'Советская залупа', {N: new N(121), P: new P(80), K: new K(160)}));
    this.fertilizerList.add(new Fertilizer('МФК2', 'Советская залупа', {N: new N(121), P: new P(80), K: new K(160)}));
    this.fertilizerList.add(new Fertilizer('Буйский хуй', 'Буйский завод', {N: new N(100), P: new P(100), K: new K(100)}));
    this.fertilizerListTwo.add(new Fertilizer('Вонючий хуй', 'Буйский завод', {N: new N(100), P: new P(100), K: new K(100)}));
    this.fertilizerListTwo.add(new Fertilizer('Calcium пизда', 'Valagro', {N: new N(200), P: new P(40), K: new K(155)}));
    this.fertilizerListTwo.add(new Fertilizer('МФК Хуй', 'Советская залупа', {N: new N(121), P: new P(80), K: new K(160)}));
    this.fertilizerListTwo.add(new Fertilizer('МФК ыыы', 'Советская залупа', {N: new N(121), P: new P(80), K: new K(160)}));
    this.fertilizerListTwo.add(new Fertilizer('Мыыыыы', 'Советская залупа', {N: new N(121), P: new P(80), K: new K(160)}));
    this.fertilizerListTwo.add(new Fertilizer('Буйский хуй', 'Буйский завод', {N: new N(666), P: new P(100), K: new K(100)}));
    console.log(this.fertilizers);
    this.lists.push(this.fertilizerList);
    this.lists.push(this.fertilizerListTwo);
   }

   get(): Fertilizer[] {
    return this.fertilizers;
   }

   getLists(): FertilizerList[] {
     return this.lists;
   }
}
