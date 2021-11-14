import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { FileCardComponent } from './components/printer/printer-main/file-card/file-card.component';
import { PrinterConfigurationComponent } from './components/printer/printer-configuration/printer-configuration.component';
import { PrinterMainComponent } from './components/printer/printer-main/printer-main.component';
import {YeelightMainComponent} from "./components/yeelight/yeelight-main/yeelight-main.component";
import { YeelightBulbCardComponent } from './components/yeelight/yeelight-bulb-card/yeelight-bulb-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileCardComponent,
    PrinterConfigurationComponent,
    PrinterMainComponent,
    YeelightMainComponent,
    YeelightBulbCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
