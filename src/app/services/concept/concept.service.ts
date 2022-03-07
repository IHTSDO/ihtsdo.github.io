import {Injectable} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BranchingService} from '../branching/branching.service';
import {AuthoringService} from '../authoring/authoring.service';

@Injectable({
    providedIn: 'root'
})
export class ConceptService {

    private branchPath: string;
    private branchPathSubscription: Subscription;

    private concepts = new Subject();

    constructor(private http: HttpClient,
                private authoringService: AuthoringService,
                private branchingService: BranchingService) {
        this.branchPathSubscription = this.branchingService.getBranchPath().subscribe(data => this.branchPath = data);
    }

    setConcepts(concepts) {
        this.concepts.next(concepts);
    }

    getConcepts() {
        return this.concepts.asObservable();
    }

    httpGetExampleConcepts(id): Observable<any> {
        return this.http.get<object>(this.authoringService.uiConfiguration.endpoints.terminologyServerEndpoint + 'browser/' +  this.branchPath
            + '/concepts/' + id + '/children');
    }
}
