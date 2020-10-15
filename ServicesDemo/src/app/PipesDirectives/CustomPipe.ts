import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';
@Pipe({
    name:'formatPhone'
})
export class PhoneFormatPipe implements PipeTransform {
//    +1 415 5552671 format for US phone number
    transform(value: string): string{
        return "+1"+value;
        
    }
}