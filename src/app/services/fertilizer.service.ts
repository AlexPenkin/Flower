import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Fertilizer } from '../models/fertilizer';
import * as elements from '../models/Elements';
import { FertilizerList } from '../models/fertilizersList';
import { Composition } from '../models/composition';

@Injectable()
export class FertilizerService {
    fertilizers$: Subject<Fertilizer[]> = new Subject;
    sets: FertilizerList[] = [];
    fertilizerList: FertilizerList = new FertilizerList('1');
    currentList: FertilizerList;
    currentList$: BehaviorSubject<FertilizerList>;

    constructor(private http: HttpClient) {
        this.getAllNet();
        this.currentList = new FertilizerList('Test');
        this.currentList$ = new BehaviorSubject<FertilizerList>(
            this.currentList
        );
        this.sets.push(this.fertilizerList);
    }

    setCurrentList(id: number) {
        this.currentList = this.sets.find(el => el.ID === Number(id));
        this.currentList$.next(this.currentList);
    }

    getAllKnownElements(): string[] {
        return Object.keys(new Composition());
    }

    addFertilizerList(list: FertilizerList) {
        this.sets.push(list);
    }

    // Add new fertilizer to all known fertilizers
    addNewFertilizer(fertilizer: Fertilizer): void {
        const compatibleWithServer = {
            name: fertilizer.name,
            vendor: fertilizer.vendor || ''
        };
        for (const element of this.getAllKnownElements()) {
            compatibleWithServer[element] =
                fertilizer.composition[element].weightProportion;
        }
        this.http
            .post('/v1/fertilizer', JSON.stringify(compatibleWithServer))
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
            this.fertilizers$.next(
                response.data.map(fertilizer => {
                    const keys = this.getAllKnownElements();
                    const composition = {};
                    for (const element of keys) {
                        if (element.length <= 2) {
                            composition[element] = new elements[element](
                                fertilizer[element]
                            );
                        }
                    }
                    this.fertilizerList.add(
                        new Fertilizer(
                            fertilizer.ID,
                            fertilizer.name,
                            fertilizer.vendor,
                            composition
                        )
                    );
                    return new Fertilizer(
                        fertilizer.ID,
                        fertilizer.name,
                        fertilizer.vendor,
                        composition
                    );
                })
            );
        });
    }
}
