import {Injectable, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UpgradeModule} from "@angular/upgrade/static";
import { PhoneListComponent } from './phone-list/phone-list.component';
import {FormsModule} from "@angular/forms";

@Injectable()
export abstract class PhoneService{
  abstract query():any;
}

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    FormsModule
  ],
  providers: [{
    provide: PhoneService, useFactory:(i: any) => i.get('Phone'), deps: ['$injector']
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
