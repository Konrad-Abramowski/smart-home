import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrinterConfigurationComponent} from "./components/printer-configuration/printer-configuration.component";
import {PrinterMainComponent} from "./components/printer-main/printer-main.component";

const routes: Routes = [
  {path: '', component: PrinterMainComponent},
  {path: 'configuration/printer', component: PrinterConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
