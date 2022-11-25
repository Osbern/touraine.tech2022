import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {UpgradeModule, downgradeComponent} from "@angular/upgrade/static";
import {PhoneListComponent} from "./app/phone-list/phone-list.component";
import 'angular';
if (environment.production) {
  enableProdMode();
}
declare const angular: angular.IAngularStatic;
interface DowngradeComponent {
  alias: string;
  ngComponent: any;
}

const ngDowngradeComponents: ReadonlyArray<DowngradeComponent> = [
  // alias must match selector name as CamelCase
  // otherwise angularjs won't load them
  {alias: 'appPhoneList', ngComponent: PhoneListComponent},
];

ngDowngradeComponents.forEach(dgComponent =>
  angular
    .module('phonecatApp')
    .directive(dgComponent.alias, downgradeComponent({component: dgComponent.ngComponent}) as angular.IDirectiveFactory)
);

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(platformRef => {
    // Use the upgrade module to bootstrap the hybrid
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['phonecatApp'], {strictDi: false});
  }).catch(err => console.error(err));
