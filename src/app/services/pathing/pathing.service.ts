import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Project} from '../../models/project';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PathingService {

    private branches = new Subject();
    private activeBranch = new Subject();
    private projects = new Subject();
    private activeProject = new Subject();
    private tasks = new Subject();
    private activeTask = new Subject();

    constructor(private http: HttpClient) {
    }

    // BRANCH
    setActiveBranch(branch) {
        this.activeBranch.next(branch);
    }

    getActiveBranch() {
        return this.activeBranch.asObservable();
    }

    setBranches(branches) {
        this.branches.next(branches);
    }

    getBranches() {
        return this.branches.asObservable();
    }

    httpGetBranches(): Observable<any> {
        return this.http.get('/snowstorm/snomed-ct/codesystems').pipe(map(data => {
                return data['items'];
            }
        ));
    }

    // PROJECT
    setActiveProject(project) {
        this.activeProject.next(project);
    }

    getActiveProject() {
        return this.activeProject.asObservable();
    }

    setProjects(projects) {
        this.projects.next(projects);
    }

    getProjects() {
        return this.projects.asObservable();
    }

    httpGetProjects(): Observable<Project[]> {
        return this.http.get<Project[]>('/authoring-services/projects?lightweight=true');
    }

    // TASK
    setActiveTask(task) {
        this.activeTask.next(task);
    }

    getActiveTask() {
        return this.activeTask.asObservable();
    }

    setTasks(tasks) {
        this.tasks.next(tasks);
    }

    getTasks() {
        return this.tasks.asObservable();
    }

    httpGetTasks(project): Observable<any> {
        return this.http.get('/authoring-services/projects/' + project.key + '/tasks?lightweight=true');
    }
}
