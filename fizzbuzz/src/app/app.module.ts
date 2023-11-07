import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FizzBuzzDisplayComponent } from './components/fizz-buzz-display/fizz-buzz-display.component';
import { ButtonComponent } from './components/button/button.component';
// import { FizzBuzzPipe } from './pipes/fizz-buzz.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FizzBuzzDisplayComponent,
    ButtonComponent,
    // FizzBuzzPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
