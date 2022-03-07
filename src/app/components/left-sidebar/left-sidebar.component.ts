import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ConceptService} from '../../services/concept/concept.service';

@Component({
    selector: 'app-left-sidebar',
    templateUrl: './left-sidebar.component.html',
    styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

    textFilter: string;

    concepts: any;
    conceptsNotesSubscription: Subscription;

    chapters = [
        'Introduction',
        'Colours',
        'Typeface',
        'Forms',
        'Modals',
        'Toastr',
        'Libraries',
        'Learning'
    ];

    constructor(private conceptService: ConceptService) {
        this.conceptsNotesSubscription = this.conceptService.getConcepts().subscribe( data => this.concepts = data);
    }

    ngOnInit() {

    }

    cloneObject(object): any {
        return JSON.parse(JSON.stringify(object));
    }
}
