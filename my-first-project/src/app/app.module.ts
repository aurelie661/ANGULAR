import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormsModule } from '@angular/forms';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { RepertoryComponent } from './components/repertory/repertory.component';
import { ListingComponent } from './components/listing/listing.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { FormElementComponent } from './components/form-element/form-element.component';
import { ListElementComponent } from './components/list-element/list-element.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUserComponent,
    ConditionalComponent,
    RepertoryComponent,
    ListingComponent,
    FormContactComponent,
    FormElementComponent,
    ListElementComponent,
    DeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
