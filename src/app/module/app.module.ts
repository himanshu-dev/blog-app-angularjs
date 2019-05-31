import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RootComponent} from '../component/root/root';
import {HeaderComponent} from "../component/header/header";

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
