import { Pipe, PipeTransform } from '@angular/core';
import { FormControl , AbstractControl} from "@angular/forms";
@Pipe({
  name: 'formControl',
})
export class TestPipe implements PipeTransform {

  transform(value: AbstractControl): FormControl {
    return value as FormControl;
}

}
