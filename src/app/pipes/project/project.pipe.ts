import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'project'
})
export class ProjectPipe implements PipeTransform {

    transform(items: any[], branch): any {
        if (!items) {
            return [];
        }

        if (!branch) {
            return items;
        }

        items = items.filter(item => {
            return item.codeSystem.branchPath === branch.branchPath;
        });

        return items;
    }

}
