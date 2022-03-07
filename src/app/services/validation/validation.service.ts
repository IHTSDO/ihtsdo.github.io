import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    constructor() {
    }

    validateCardinality(input): string {
        if (input.length !== 4) {
            return 'Cardinality must be 4 characters';
        } else if (input.charAt(0) !== '*' || !isNaN(input.charAt(0))) {
            return 'Cardinality must begin with * or a number';
        } else if (input.charAt(3) !== '*' || !isNaN(input.charAt(3))) {
            return 'Cardinality must end with * or a number';
        } else if (input.charAt(1) !== '.' || input.charAt(2) !== '.') {
            return 'Cardinalities middle two characters must be .';
        } else {
            return '';
        }
    }
}
