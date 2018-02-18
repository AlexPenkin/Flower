import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { IFertilizerList } from '../models/set';

interface SaveRequest {
  name: string;
  litrage: number;
  culture: string;
  fertilizers: Array<number>;
}

@Injectable()
export class SetService {
  constructor(private http: AuthHttp) { }

  prepareSet(set: IFertilizerList): SaveRequest {
    const { name, litrage, culture } = set;
    const result: SaveRequest = {
      name,
      litrage: litrage || 1,
      culture: culture || 'green',
      fertilizers: set.fertilizers.map(ferilizer => ferilizer.ID)
    };
    return result;
  }

  save(set: IFertilizerList) {
    this.http.post('/v1/set', this.prepareSet(set)).subscribe(res => console.log(res));
  }
}
