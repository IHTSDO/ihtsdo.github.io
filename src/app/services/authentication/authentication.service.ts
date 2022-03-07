import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Subject } from 'rxjs';
import { AuthoringService } from '../authoring/authoring.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private user = new Subject<User>();

    constructor(private http: HttpClient, private authoringService: AuthoringService) {
    }

    setUser() {
        this.http.get<User>('/auth').subscribe(user => {
            this.user.next(user);
        });
    }

    getUser() {
        return this.user.asObservable();
    }

    logout() {
        window.location.href =
            this.authoringService.uiConfiguration.endpoints.imsEndpoint + 'logout?serviceReferer=' + window.location.href;
    }
}
