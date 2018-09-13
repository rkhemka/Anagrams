import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AnagramComponent } from './anagram/anagram.component';

@NgModule({
  declarations: [
    AppComponent,
    AnagramComponent
  ],
  imports: [
    AlertModule.forRoot(),BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
