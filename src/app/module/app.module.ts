import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RootComponent} from '../component/root/root';
import {HeaderComponent} from "../component/header/header";
import {HomeComponent} from "../component/home/home";

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
