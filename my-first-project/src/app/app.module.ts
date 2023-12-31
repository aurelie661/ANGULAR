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
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { EnMajPipe } from './pipes/en-maj.pipe';
import { LengthTextPipe } from './pipes/length-text.pipe';
import { TriePipe } from './pipes/trie.pipe';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { MinutorComponent } from './components/minutor/minutor.component';
import { FirstComponent } from './components/first/first.component';
import { AlphabetComponent } from './components/alphabet/alphabet.component';
import { AlphabetService } from './services/alphabet.service';
import { MovieFormComponent } from './components/movie-form/movie-form.component';

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
    DeleteButtonComponent,
    DemoPipeComponent,
    EnMajPipe,
    LengthTextPipe,
    TriePipe,
    ButtonComponent,
    CardComponent,
    MinutorComponent,
    FirstComponent,
    AlphabetComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AlphabetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
