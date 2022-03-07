import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StatusPageService {

    constructor(private http: HttpClient) {
    }

    getSchedule() {
        return this.http.get<object>('/status-page/scheduled-maintenances.json');
    }
}
