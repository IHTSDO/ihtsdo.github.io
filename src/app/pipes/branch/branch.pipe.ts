import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'branch'
})
export class BranchPipe implements PipeTransform {

    transform(items: any[], projects: any[]): any {
        if (!items) {
            return [];
        }

        if (!projects) {
            return items;
        }

        const response = [];

        items.forEach(item => {
            projects.find(project => {
                if (project.codeSystem.branchPath === item.branchPath) {
                    if (!response.includes(item)) {
                        response.push(item);
                    }
                }
            });
        });

        return response;
    }

}
