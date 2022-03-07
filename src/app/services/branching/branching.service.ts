import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BranchingService {

    constructor() {
    }

    private branchPath = new Subject<string>();

    // Setters & Getters: BranchPath
    setBranchPath(path) {
        this.branchPath.next(path);
    }

    getBranchPath(): Observable<string> {
        return this.branchPath.asObservable();
    }
}
