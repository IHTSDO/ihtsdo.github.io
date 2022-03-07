import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }

        searchText = searchText.toLowerCase();
        items = items.filter(item => {
            return item.toLowerCase().includes(searchText);
        });
        return items;
    }

}
