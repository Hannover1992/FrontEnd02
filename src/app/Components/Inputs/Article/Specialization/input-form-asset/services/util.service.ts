// form.service.ts
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class Util {

  constructor(private fb: FormBuilder) {}

  /**
   * Returns the value of a form control. Returns an empty string if the control is null or has no value.
   * @param control The form control.
   */
  getFormValue(control: AbstractControl | null): string {
    return control && control.value ? control.value : '';
  }

  /**
   * Returns the value of a form control as a number. Returns 0 if the control is null or has no value.
   * @param control The form control.
   */
  getFormValueAsNumber(control: AbstractControl | null): number {
    return control && control.value ? Number(control.value) : 0;
  }

  /**
   * Returns the value of a form control as a float. Returns 0 if the control is null or has no value.
   * @param control The form control.
   */
  getFormValueAsFloat(control: AbstractControl | null): number {
    return control && control.value ? parseFloat(control.value) : 0;
  }

  /**
   * Returns the value of a form control as an ISO string. Returns an empty string if the control is null or has no value.
   * @param control The form control.
   */
  getFormValueAsISOString(control: AbstractControl | null): string {
    return control && control.value ? control.value.toISOString() : '';
  }
}
