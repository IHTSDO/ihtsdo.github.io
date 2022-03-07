import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SnomedUtilityService {

    constructor() {
    }

    static convertShortConceptToString(input): string {
        return input.id + ' |' + input.fsn.term + '|';
    }

    static convertFullConceptToShortConcept(input): object {
        return { sctId: input.id, fsn: input.fsn.term, new: true};
    }

    static convertStringToShortConcept(input: string): object {
        input = input.trim();

        const sctId = String(input.match(/\d+/)[0]);
        let fsn: string;

        input.includes('|') ? fsn = input.slice(input.indexOf('|') + 1, input.lastIndexOf('|')) : fsn = '';

        return {sctId: sctId, fsn: fsn, new: null};
    }

    static convertStringListToShortConceptList(input: string): object[] {
        input = input.trim();
        const stringArray = input.replace(/,\s*$/, '').split(',');

        const output: object[] = [];

        stringArray.forEach(text => {
            output.push(this.convertStringToShortConcept(text));
        });

        return output;
    }

    static getSemanticTagFromFsn(input): string {
        return input.replace( /(^.*\(|\).*$)/g, '');
    }

    static getIdFromShortConcept(input): string {
        return input.replace(/\D/g, '');
    }

    // Takes a string ETL expression and returns an array of ETL expression lines, correctly indented.
    static ETLexpressionBuilder(expression: string) {
        const response = expression.match(/(?:[^:,](?!OR))+(?:[:,\s]| OR)*/g);

        let whitespaceCount = 0;

        for (let i = 0; i < response.length; i++) {
            if (i !== 0) {
                if (response[i - 1].includes(':')) {
                    whitespaceCount++;
                }

                if (response[i - 1].includes('{') && !response[i - 1].includes('}')) {
                    whitespaceCount++;
                }

                if (!response[i - 1].includes('{') && response[i - 1].includes('}')) {
                    whitespaceCount--;
                }

                if (!response[i - 1].includes('OR') && response[i].startsWith('OR')) {
                    whitespaceCount++;
                }

                if (response[i - 1].includes('OR') && response[i - 1].trim().endsWith(',')) {
                    whitespaceCount--;
                }
            }

            response[i] =  '    '.repeat(whitespaceCount) + response[i].trim();
        }

        return response;
    }

    // Takes a string ECL expression and returns an array of ETL expression lines, correctly indented.
    static ECLexpressionBuilder(expression: string) {
        const response = expression.match(/(?:[^:,](?!OR)(?!\(<<))+(?:[:,\s]| OR)*/g);

        let whitespaceCount = 0;

        for (let i = 0; i < response.length; i++) {
            if (i !== 0) {
                if (response[i - 1].includes(':')) {
                    whitespaceCount++;
                }

                if (response[i].startsWith('<<') && !response[i - 1].includes(':')) {
                    whitespaceCount++;
                }

                if (!response[i - 1].includes('OR') && response[i].startsWith('OR')) {
                    whitespaceCount++;
                }

                if (response[i - 1].includes('OR') && response[i - 1].trim().endsWith(',')) {
                    whitespaceCount--;
                }

                if (response[i].startsWith('R')) {
                    whitespaceCount++;
                }
            }

            response[i] =  '    '.repeat(whitespaceCount) + response[i].trim();
        }

        return response;
    }

    static expressionComparator(expression: string[], originalExpression: string[]) {
        const combined = [{}];
        const count = [];
        for (let i = 0; i < expression.length; i++) {
            const line = {
                type: '',
                text: ''
            };
            for (let j = 0; j < originalExpression.length; j++) {
                if (expression[i] === originalExpression[j]) {
                    line.text = expression[i];
                    line.type = 'unchanged';
                    combined.push(line);
                    break;
                }
            }
            if (line.text === '') {
                line.text = expression[i];
                line.type = 'added';
                combined.push(line);
                count.push(i);
            }
        }
        for (let i = 0; i < originalExpression.length; i++) {
            const line = {
                type: '',
                text: ''
            };
            for (let j = 0; j < expression.length; j++) {
                if (originalExpression[i] === expression[j]) {
                    line.text = originalExpression[i];
                    line.type = 'unchanged';
                }
            }
            if (line.text === '') {
                let innerCount = 0;
                line.text = originalExpression[i];
                line.type = 'removed';
                for (let j = 0; j < count.length; j++) {
                    if (count[j] >= i) {
                        innerCount++;
                    }
                }
                combined.splice(i + innerCount, 0, line);
            }
        }
        return combined;
    }
}
