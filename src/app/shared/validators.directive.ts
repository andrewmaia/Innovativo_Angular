import { AbstractControl,ValidatorFn } from '@angular/forms';


export function numberValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      var v= new RegExp(/^[0-9]*\d$/i) ;
      const forbidden = v.test(control.value);
      return forbidden ?  null : {'Valor inválido': {value: control.value}} ;
    };
  }

  export function requiredTextValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = ((control.value || '').trim() != "") ;
      return forbidden ?  null : {'Valor inválido': {value: control.value}} ;
    };
  }