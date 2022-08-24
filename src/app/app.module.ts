// FRAMEWORK IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

// COMPONENT IMPORTS
import { SnomedNavbarComponent } from './components/snomed-navbar/snomed-navbar.component';
import { SnomedFooterComponent } from './components/snomed-footer/snomed-footer.component';

// PIPE IMPORTS
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthoringService } from './services/authoring/authoring.service';

// PROVIDER IMPORTS
import { EnvServiceProvider } from './providers/env.service.provider';
import {ToastrModule} from 'ngx-toastr';
import {StatusPageService} from './services/statusPage/status-page.service';
import {PathingService} from './services/pathing/pathing.service';
import {AlphabeticalPipe} from './pipes/alphabetical/alphabetical.pipe';
import {BranchPipe} from './pipes/branch/branch.pipe';
import {ProjectPipe} from './pipes/project/project.pipe';
import {AppRoutingModule} from './app-routing.module';
import {ModalService} from './services/modal/modal.service';
import {ModalComponent} from './components/modal/modal.component';
import {LeftSidebarComponent} from './components/left-sidebar/left-sidebar.component';
import {TextFilterPipe} from './pipes/text-filter/text-filter.pipe';
import {ConceptService} from './services/concept/concept.service';
import { MainViewComponent } from './components/main-view/main-view.component';
// import {EditorModule} from "@tinymce/tinymce-angular";

// SERVICE IMPORTS


@NgModule({
    declarations: [
        AppComponent,
        SnomedNavbarComponent,
        SnomedFooterComponent,
        AlphabeticalPipe,
        BranchPipe,
        ProjectPipe,
        ModalComponent,
        LeftSidebarComponent,
        TextFilterPipe,
        MainViewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgbTypeaheadModule,
        AppRoutingModule,
        ToastrModule.forRoot()
        // EditorModule
    ],
    providers: [
        AuthenticationService,
        AuthoringService,
        StatusPageService,
        ModalService,
        PathingService,
        ConceptService,
        EnvServiceProvider,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
