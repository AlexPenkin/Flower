import { Component, OnInit, HostBinding } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Composition } from '../../models/composition';
import { FertilizerService } from '../../services/fertilizer.service';
import { Fertilizer } from '../../models/fertilizer';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-add-ferilizer',
  templateUrl: './add-ferilizer.component.html',
  styleUrls: ['./add-ferilizer.component.css']
})
export class AddFerilizerComponent implements OnInit {
  fertilizerForm: FormGroup;
  keys: string[];
  @HostBinding('attr.class') class = 'layout';

  constructor(
    private fertilizerService: FertilizerService,
    private fb: FormBuilder
  ) {
    this.keys = fertilizerService.getAllKnownElements();
    const objForForm = {};
    this.keys.map(key => {
      objForForm[key] = 0;
    });
    this.fertilizerForm = this.fb.group({
      name: ['', Validators.required],
      vendor: '',
      composition: this.fb.group(objForForm)
    });
  }

  onSave() {
    const form = this.fertilizerForm;
    const fertilizer = new Fertilizer(
      form.get('name').value,
      form.get('vendor').value
    );
    this.keys.forEach((key: string) => {
      fertilizer.composition[key].weightProportion = +form.controls.composition.value[key] || 0;
    });
    this.fertilizerService.addNewFertilizer(fertilizer);
  }

  ngOnInit() {}
}
