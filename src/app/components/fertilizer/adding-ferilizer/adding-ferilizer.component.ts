import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Composition } from '../../../models/composition';
import { FertilizerService } from '../../../services/fertilizer.service';
import { Fertilizer } from '../../../models/fertilizer';
import { forEach } from '@angular/router/src/utils/collection';
import { log } from 'util';

@Component({
    selector: 'app-adding-ferilizer',
    templateUrl: './adding-ferilizer.component.html',
    styleUrls: ['./adding-ferilizer.component.css']
})
export class AddFerilizerComponent implements OnInit {
    fertilizerForm: FormGroup;
    keys: string[];
    logo: File;
    logoUrl: string;
    @HostBinding('attr.class') class = 'layout';

    constructor(
        private fertilizerService: FertilizerService,
        private fb: FormBuilder,
        private http: HttpClient
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

    onLogoUpload(e) {
        this.logo = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.logo);
        reader.addEventListener(
            'load',
            () => {
                this.logoUrl = reader.result;
            },
            false
        );
    }

    onSave() {
        const form = this.fertilizerForm;
        const fertilizer = new Fertilizer(
            form.get('name').value,
            form.get('vendor').value
        );
        this.keys.forEach((key: string) => {
            fertilizer.composition[key].weightProportion =
                +form.controls.composition.value[key] || 0;
        });
        this.fertilizerService.addNewFertilizer(fertilizer);
    }

    ngOnInit() {}
}
