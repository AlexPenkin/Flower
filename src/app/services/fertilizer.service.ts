import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Fertilizer } from '../models/fertilizer';
import { Element, N, P, K } from '../models/Elements';
import { FertilizerList } from '../models/fertilizersList';
import { Composition } from '../models/composition';

@Injectable()
export class FertilizerService {
    fertilizers: Fertilizer[] = []; // Keeps all known fertilizers
    lists: FertilizerList[] = [];
    lists$: Subject<FertilizerList>;
    fertilizer: FertilizerList = new FertilizerList('1');
    fertilizerList: FertilizerList = new FertilizerList('Test');
    fertilizerListTwo: FertilizerList = new FertilizerList('Test2');
    fertilizerKeys: string[] = [];
    currentList: FertilizerList;
    currentList$: BehaviorSubject<FertilizerList> = new BehaviorSubject<
        FertilizerList
    >(this.currentList);

    constructor(private http: HttpClient) {
        this.getAllNet();
    }

    setCurrentList(id: number) {
        this.currentList = this.lists.find(el => el.ID === Number(id));
        this.currentList$.next(this.currentList);
    }

    getAllKnownElements() {
        return Object.keys(new Composition());
    }

    addFertilizerList(list: FertilizerList) {
        this.lists.push(list);
    }

    // Add new fertilizer to all known fertilizers
    addNewFertilizer(fertilizer: Fertilizer): void {
        this.http
            .post('/v1/fertilizer', JSON.stringify(fertilizer))
            .subscribe(response => {
                console.log(response);
            });
    }

    // Calculate current list in nutrient and set in Result attribute in FertilizerList class
    calcCurrentList(): void {
        this.currentList.result = this.currentList.calc();
        this.currentList$.next(this.currentList);
    }

    getAllNet() {
        this.http.get('/v1/fertilizers').subscribe((response: any) => {
            this.fertilizers = response.data;
        });
    }

    getAll(): Fertilizer[] {
        return this.fertilizers;
    }

    getLists(): FertilizerList[] {
        return this.lists;
    }

    getListsNet(): FertilizerList[] {
        return this.lists;
    }

    getRxLists(): Observable<FertilizerList[]> {
        console.log(this.lists);
        return Observable.of(this.lists);
    }
}
