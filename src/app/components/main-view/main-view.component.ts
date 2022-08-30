import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ModalService} from '../../services/modal/modal.service';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, filter, switchMap, tap} from 'rxjs/operators';
import {TerminologyServerService} from '../../services/terminologyServer/terminology-server.service';

@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

    editorConfig = {
        base_url: '/tinymce',
        suffix: '.min',
        height: 500,
        menubar: false,
        statusbar: false,
        plugins: 'link table',
        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link | table'
    };

    toastrConfig = {
        closeButton: true
    };

    basicTypeahead: string;
    spinner = document.createElement('div');

    search = (text$: Observable<string>) => text$.pipe(
        debounceTime(300),
        filter((text) => text.length > 2),
        distinctUntilChanged(),
        tap(() => document.activeElement.parentElement.appendChild(this.spinner)),
        switchMap(term => this.terminologyService.getTypeahead(term)
            .pipe(tap(() => document.getElementById('spinner').remove()))
        ),
        catchError(tap(() => document.getElementById('spinner').remove()))
    )

    constructor(private toastr: ToastrService,
                private modalService: ModalService,
                private terminologyService: TerminologyServerService) {
        this.spinner.id = 'spinner';
        this.spinner.classList.add('spinner-border', 'spinner-border-sm', 'position-absolute');
        this.spinner.style.top = '7px';
        this.spinner.style.right = '7px';
    }

    ngOnInit(): void {
    }

    openModal(id: string): void {
        this.modalService.open(id);
    }

    closeModal(id: string): void {
        this.modalService.close(id);
    }

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
