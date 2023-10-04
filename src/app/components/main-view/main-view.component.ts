import {Component, NgIterable, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ModalService} from '../../services/modal/modal.service';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, filter, switchMap, tap} from 'rxjs/operators';
import {TerminologyServerService} from '../../services/terminologyServer/terminology-server.service';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

    toastrConfig = {
        closeButton: true
    };

    myControl = new FormControl('');
    options: string[] = ['One', 'Two', 'Three'];

    filteredOptions: NgIterable<any>;

    constructor(private toastr: ToastrService,
                private modalService: ModalService,
                private terminologyService: TerminologyServerService) {
    }

    ngOnInit(): void {
        this.myControl.valueChanges
            .subscribe(value => {
                if(value.length >= 1){
                    this.terminologyService.getAutocomplete(value).subscribe(response => {
                        this.filteredOptions = response;
                    });
                }
                else {
                    return null;
                }
            })
    }

    openModal(id: string): void {
        this.modalService.open(id);
    }

    closeModal(id: string): void {
        this.modalService.close(id);
    }

    // autocomplete() {
    //     this.myControl.valueChanges
    //         .subscribe(value => {
    //             if(value.length >= 1){
    //                 this.terminologyService.getAutocomplete(value).subscribe(response => {
    //                     this.filteredOptions = response;
    //                 });
    //             }
    //             else {
    //                 return null;
    //             }
    //         })
    // }

    delete(): void {
        this.toastr.error('This doesn\'t really delete anything', 'DELETE', this.toastrConfig);
    }

    save(): void {
        this.toastr.success('This doesn\'t really save anything', 'SAVE', this.toastrConfig);
    }

    toastrSuccess() {
        this.toastr.success('Message data goes here', 'SUCCESS', this.toastrConfig);
    }

    toastrWarning() {
        this.toastr.warning('Message data goes here', 'WARNING', this.toastrConfig);
    }

    toastrError() {
        this.toastr.error('Message data goes here', 'ERROR', this.toastrConfig);
    }

    toastrInfo() {
        this.toastr.info('Message data goes here', 'INFO', this.toastrConfig);
    }

    toastrShow() {
        this.toastr.show('Message data goes here', 'SHOW', this.toastrConfig);
    }
}
