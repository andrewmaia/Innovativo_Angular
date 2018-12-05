import { AbstractControl,ValidatorFn } from '@angular/forms';


/** A hero's name can't match the given regular expression */
export function numberValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      var v= new RegExp(/^[0-9]*\d$/i) ;
      const forbidden = v.test(control.value);
      return forbidden ?  null : {'forbiddenName': {value: control.value}} ;
    };
  }