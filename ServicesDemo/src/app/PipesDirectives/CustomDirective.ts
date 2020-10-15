import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import {NgModel} from '@angular/forms';
@Directive({
    selector: '[highlight]',
    providers: [NgModel]
})
export class HighlightDirective {
    value:string;
    @Input() name: string;
    @HostListener('keydown', ['$event']) onKeyDown(e) {
        this.validateValue();
    }
    constructor(private eleRef: ElementRef, public model: NgModel) {
     
        
    }
    validateValue(){       
        if(this.name && this.name.length > 10){
            this.eleRef.nativeElement.style.borderColor = 'red';
        }
    }

}