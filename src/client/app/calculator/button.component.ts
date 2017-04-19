import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'calc-button',
    template: '<input type="button" class="calc-button" value="{{label}}"/>',
    styles: [`
        .calc-button {
            height: 2em;
            width: 2em;
        }`]
})

export class ButtonComponent {
    @Input() label: String;
}