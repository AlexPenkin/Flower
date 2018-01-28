import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from './auth.service';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Fertilizer } from '../models/fertilizer';
import * as elements from '../models/Elements';
import { FertilizerList } from '../models/set';
import { Composition } from '../models/composition';
import { Response } from '@angular/http/src/static_response';

const HOST = `http://localhost:9000`;

@Injectable()
export class FertilizerService {
    fertilizers$: Subject<Fertilizer[]> = new Subject();
    lists: FertilizerList[] = [];
    fertilizerList: FertilizerList = new FertilizerList('1');
    currentList: FertilizerList;
    currentList$: BehaviorSubject<FertilizerList>;

    constructor(public http: AuthHttp, public authServise: AuthService) {
        this.getAllAsync();
        this.currentList = new FertilizerList('Test');
        this.currentList$ = new BehaviorSubject<FertilizerList>(
            this.currentList
        );
        this.lists.push(this.fertilizerList);
    }

    setCurrentList(id: number) {
        this.currentList = this.lists.find(el => el.ID === Number(id));
        this.currentList$.next(this.currentList);
    }

    getAllKnownElements(): string[] {
        return Object.keys(new Composition());
    }

    addFertilizerList(list: FertilizerList) {
        this.lists.push(list);
    }

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
            .post(`/v1/fertilizer`, JSON.stringify(compatibleWithServer))
            .subscribe(response => {
                console.log(response);
            });
    }

    deleteFertilizer(id: string) {
        this.http.delete(`/v1/fertilizer/${id}`).subscribe(response => {
            this.getAllAsync();
        });
    }

    getAllAsync() {
        if (this.authServise.isAuthenticated()) {
            this.http.get(`/v1/fertilizers`).subscribe((response: Response) => {
                this.fertilizers$.next(
                    response.json().data.map(fertilizer => {
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
}
