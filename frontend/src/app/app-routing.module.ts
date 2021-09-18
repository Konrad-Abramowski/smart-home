import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrinterConfigurationComponent} from "./components/printer-configuration/printer-configuration.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'configuration/printer', component: PrinterConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
