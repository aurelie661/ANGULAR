import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthText'
})
export class LengthTextPipe implements PipeTransform {

  transform(value: string, delimitation: number = 50): string {
    if(value.length > 50){
      return value.substring(0,delimitation)+ "...";
    }else{
      return value;
    }
    
  }

}
