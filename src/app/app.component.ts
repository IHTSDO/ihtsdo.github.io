import {Component, Inject, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthoringService } from './services/authoring/authoring.service';
import { BranchingService } from './services/branching/branching.service';
import { EnvService } from './services/environment/env.service';
import { ToastrService } from 'ngx-toastr';
import {StatusPageService} from './services/statusPage/status-page.service';
import {TerminologyServerService} from './services/terminologyServer/terminology-server.service';
import {ModalService} from './services/modal/modal.service';
import {ConceptService} from './services/concept/concept.service';
import {DOCUMENT} from "@angular/common";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    toastrConfig = {
        closeButton: true
    };

    versions: object;
    environment: string;
    scheduledAlerts: any[] = [];

    constructor(private authoringService: AuthoringService,
                private branchingService: BranchingService,
                private envService: EnvService,
                private toastr: ToastrService,
                private titleService: Title,
                private statusService: StatusPageService,
                private terminologyService: TerminologyServerService,
                private modalService: ModalService,
                private conceptService: ConceptService,
                @Inject(DOCUMENT) private document: Document) {
    }

    ngOnInit() {
        this.titleService.setTitle('SNOMED CT Angular Template');
        this.environment = this.envService.env;

        // this.authoringService.getVersions().subscribe(versions => {
        //     this.versions = versions;
        // });

        // this.authoringService.getUIConfiguration().subscribe(config => {
        //     this.authoringService.uiConfiguration = config;
        //
        //     this.conceptService.httpGetExampleConcepts('138875005').subscribe(data => {
        //         this.conceptService.setConcepts(data);
        //     });
        // });

        this.branchingService.setBranchPath('MAIN');
        this.assignFavicon();

        // this.checkSchedule();
        // setInterval(() => this.checkSchedule(), 60000);
    }

    checkSchedule() {
        this.statusService.getSchedule().subscribe(schedule => {
            this.calculateSchedule(schedule['scheduled_maintenances']);
        });
    }

    calculateSchedule(schedule) {
        const currentTime = new Date().getTime();

        schedule.forEach(item => {
            if (!this.scheduledAlerts.some(storedItem => storedItem.id === item.id)) {
                if (item.status === 'scheduled') {
                    this.toastr.info(item.incident_updates[0].body, 'NEW MAINTENANCE', this.toastrConfig);
                }
            }

            const scheduledTime = new Date(item.scheduled_for).getTime();

            if (this.schedule10minCheck(currentTime, scheduledTime)) {
                this.toastr.warning(item.incident_updates[0].body, '10 MINS', this.toastrConfig);
            }

            if (this.schedule5minCheck(currentTime, scheduledTime)) {
                this.toastr.warning(item.incident_updates[0].body, '5 MINS', this.toastrConfig);
            }

            if (this.schedule1minCheck(currentTime, scheduledTime)) {
                this.toastr.warning(item.incident_updates[0].body, '1 MIN', this.toastrConfig);
            }

            this.scheduledAlerts.forEach(storedAlert => {
                if (storedAlert.id === item.id) {
                    if (storedAlert.status === 'scheduled' && item.status === 'in_progress') {
                        this.toastr.info(item.incident_updates[0].body, 'MAINTENANCE STARTED', this.toastrConfig);
                    }

                    if (storedAlert.status !== 'completed' && item.status === 'completed') {
                        this.toastr.info(item.incident_updates[0].body, 'MAINTENANCE COMPLETE', this.toastrConfig);
                    }
                }
            });
        });

        // this.scheduledAlerts.forEach(storedAlert => {
        //     if (!schedule.some(item => item.id === storedAlert.id)) {
        //         this.toastr.info(storedAlert.incident_updates[0].body, 'CANCELLED', this.toastrConfig);
        //     }
        // });

        if (JSON.stringify(schedule) !== JSON.stringify(this.scheduledAlerts)) {
            this.scheduledAlerts = schedule;
        }
    }

    schedule10minCheck(currentTime, scheduledTime): boolean {
        return currentTime > (scheduledTime - 660000) && currentTime < (scheduledTime - 600000);
    }

    schedule5minCheck(currentTime, scheduledTime): boolean {
        return currentTime > (scheduledTime - 360000) && currentTime < (scheduledTime - 300000);
    }

    schedule1minCheck(currentTime, scheduledTime): boolean {
        return currentTime > (scheduledTime - 120000) && currentTime < (scheduledTime - 60000);
    }



    assignFavicon() {
        switch (this.environment) {
            case 'local':
                this.document.getElementById('favicon')?.setAttribute('href', 'favicon_grey.ico');
                break;
            case 'dev':
                this.document.getElementById('favicon')?.setAttribute('href', 'favicon_red.ico');
                break;
            case 'uat':
                this.document.getElementById('favicon')?.setAttribute('href', 'favicon_green.ico');
                break;
            case 'training':
                this.document.getElementById('favicon')?.setAttribute('href', 'favicon_yellow.ico');
                break;
            default:
                this.document.getElementById('favicon')?.setAttribute('href', 'favicon.ico');
                break;
        }
    }

    cloneObject(object): any {
        return JSON.parse(JSON.stringify(object));
    }
}
