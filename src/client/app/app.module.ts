import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';

@NgModule({
  imports: [BrowserModule, FormsModule, CalculatorModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
