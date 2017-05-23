import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Extra Modules
import { MaterialModule } from '@angular/material';
import 'hammerjs';

//Components
import { AppComponent } from './components/app/app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

//Services
import {dataHandler} from './services/dataHandler';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [dataHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
