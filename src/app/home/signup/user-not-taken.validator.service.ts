import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { SignUpService } from './signup.service';

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private signUpSeervice: SignUpService) { }

    checkUserNameTaken() {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                // Altera a emissão do observable para o novo valor
                .pipe(switchMap(userName => this.signUpSeervice.checkUserNameTaken(userName)))
                // faz um map para saber se veio não valor
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                // força o complete do async - que vai acontecer a cada 300ms
                .pipe(first());
        };
    }
}
