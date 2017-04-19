import { Component, NgModule } from '@angular/core';

import { ButtonComponent } from './calculator/button.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>Calculator</h1>
    <input class="display" type="text" [(ngModel)]="display" readonly/><br>
    <calc-button *ngFor="let item of labels.row1" (click)="buttonPressed(item);" label="{{item}}"></calc-button><br>
    <calc-button *ngFor="let item of labels.row2" (click)="buttonPressed(item);" label="{{item}}"></calc-button><br>
    <calc-button *ngFor="let item of labels.row3" (click)="buttonPressed(item);" label="{{item}}"></calc-button><br>
    <calc-button *ngFor="let item of labels.row4" (click)="buttonPressed(item);" label="{{item}}"></calc-button><br>
    <input type="button"  class="clear" (click)="buttonPressed('clear');" value="Clear" />
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  prevAction: String;
  reset: boolean = false;
  operand: number = 0;
  op: String = '';
  display: String = '0';
  labels = {
    row1: [7, 8, 9, '/'],
    row2: [4, 5, 6, '*'],
    row3: [1, 2, 3, '-'],
    row4: [0, '.', '+', '=']
  };

  buttonPressed(obj) {
    if(isNaN(obj)) {
      this.reset = true;

      if (obj === 'clear') {
        this.op = '';
        this.display = '0';
        this.operand = 0;
        this.prevAction = '';
      } else {
        if (this.op !== '') {

          if (this.op === '=') {
            this.op = this.prevAction;
          }

          this.display = this.compute(this.op, this.operand, Number(this.display));
          this.op = '';
        } else {
          if (obj !== '=') {
            this.op = obj;
          } else {
            this.reset = false;
          }
        }

        this.operand = Number(this.display);
        this.prevAction = this.op;
      }
    } else {
      if (this.display === '0'|| this.reset) {
        this.display = obj;
        this.reset = false;
      } else {
        this.display = this.display + '' + obj;
      }
    }
  }

  compute(op: String, op1: number, op2: number) : String {
    let result: String;

    switch(op) {
      case '+': 
        result = '' + (op1 + op2);
        break;
      case '-':
        result = '' + (op1 - op2);
        break;
      case '*':
        result = '' + (op1 * op2);
        break;
      case '/':
        result = '' + (op1 / op2);
        break;
      case '=': 
        result = '' + op2;
        this.reset = false;
        break;
    }
    return result;
  }
  
}
