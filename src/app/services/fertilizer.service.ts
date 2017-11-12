import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Fertilizer } from '../models/fertilizer';
import { Element, N, P, K } from '../models/Elements';
import { FertilizerList } from '../models/fertilizersList';
import { Composition } from '../models/composition';

@Injectable()
export class FertilizerService {

  fertilizers: Fertilizer[] = [];
  lists: FertilizerList[] = [];
  fertilizer: FertilizerList = new FertilizerList('1');
  fertilizerList: FertilizerList = new FertilizerList('Test');
  fertilizerListTwo: FertilizerList = new FertilizerList('Test2');
  fertilizerKeys: string[] = [];
  currentList: FertilizerList;
  currentList$: BehaviorSubject<FertilizerList> = new BehaviorSubject<FertilizerList>(this.currentList);

  constructor() {
    this.fertilizer.add(
      new Fertilizer('Буйский хуй', 'Буйский завод', new Composition({ N: new N(100), P: new P(100), K: new K(100) }))
    );
    this.fertilizerList.add(
      new Fertilizer('Буйский хуй', 'Буйский завод', new Composition({ N: new N(100), P: new P(100), K: new K(100) }))
    );
    this.fertilizerList.add(
      new Fertilizer('Calcium', 'Valagro', new Composition({ N: new N(200), P: new P(40), K: new K(155) }))
    );
    this.fertilizerList.add(
      new Fertilizer('МФК', 'Советская залупа', new Composition({ N: new N(121), P: new P(80), K: new K(160) }))
    );
    this.fertilizerList.add(
      new Fertilizer('МФК', 'Советская залупа', new Composition({ N: new N(121), P: new P(80), K: new K(160) }))
    );
    this.fertilizerList.add(
      new Fertilizer('МФК2', 'Советская залупа', new Composition({ N: new N(121), P: new P(80), K: new K(160) }))
    );
    this.fertilizerList.add(
      new Fertilizer('Буйский хуй', 'Буйский завод', new Composition({ N: new N(100), P: new P(100), K: new K(100) }))
    );
    this.fertilizerListTwo.add(
      new Fertilizer('Вонючий хуй', 'Буйский завод', new Composition({ N: new N(100), P: new P(100), K: new K(100) }))
    );
    this.fertilizerListTwo.add(
      new Fertilizer('Calcium пизда', 'Valagro', new Composition({ N: new N(200), P: new P(40), K: new K(155) }))
    );
    this.fertilizerListTwo.add(
      new Fertilizer('МФК Хуй', 'Советская залупа', new Composition({ N: new N(121), P: new P(80), K: new K(160) }))
    );
    this.fertilizerListTwo.add(
      new Fertilizer('МФК ыыы', 'Советская залупа', new Composition({ N: new N(121), P: new P(80), K: new K(160) }))
    );
    this.fertilizerListTwo.add(
      new Fertilizer('Мыыыыы', 'Советская залупа', new Composition({ N: new N(121), P: new P(80), K: new K(160) }))
    );
    this.fertilizerListTwo.add(
      new Fertilizer('Буйский хуй', 'Буйский завод', new Composition({ N: new N(666), P: new P(100), K: new K(100) }))
    );
    this.lists.push(this.fertilizer);
    this.lists.push(this.fertilizerList);
    this.lists.push(this.fertilizerListTwo);
    this.currentList = this.lists[0];
  }

  setCurrentList(id: number) {
    this.currentList = this.lists.find((el) => el.ID === Number(id));
    this.currentList$.next(this.currentList);
  }

  getAllKnownElements() {
    return Object.keys(new Composition());
  }

  // Calculate current list in nutrient and set in Result attribute in FertilizerList class
  calcCurrentList(): void {
    this.currentList.result = this.currentList.calc();
    this.currentList$.next(this.currentList);
  }

  get(): Fertilizer[] {
    return this.fertilizers;
  }

  getLists(): FertilizerList[] {
    return this.lists;
  }
}
