import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KahvilaComponent } from './kahvila/kahvila.component';
import { MyyntiComponent } from './myynti/myynti.component';

@NgModule({
  declarations: [
    AppComponent,
    KahvilaComponent,
    MyyntiComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
