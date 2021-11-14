import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrinterConfigurationComponent} from "./components/printer/printer-configuration/printer-configuration.component";
import {PrinterMainComponent} from "./components/printer/printer-main/printer-main.component";
import {YeelightMainComponent} from "./components/yeelight/yeelight-main/yeelight-main.component";

const routes: Routes = [
  {path: '', component: PrinterMainComponent},
  {path: 'configuration/printer', component: PrinterConfigurationComponent},
  {path: 'yeelight-leb-bulb', component: YeelightMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
