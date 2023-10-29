import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[hinvRootEmailvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailvalidatorDirective,
      multi: true,
    },
  ],
})
export class EmailvalidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null{
    let value = control.value as string;
    if (!value.includes('@')) {
      return {
        invalidEmail: true
      }
    }
    return null;
  }
}
