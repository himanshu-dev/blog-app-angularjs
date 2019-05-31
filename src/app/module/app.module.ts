import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RootComponent} from '../component/root/root';
import {HeaderComponent} from "../component/header/header";
import {HomeComponent} from "../component/home/home";
import {SignInComponent} from "../component/sign-in/sign-in";
import {SignUpComponent} from "../component/sign-up/sign-up";
import {NewArticleComponent} from "../component/new-article/new-article";
import {SettingsComponent} from "../component/settings/settings";
import {RoutingModule} from "./routing.module";
import {FooterComponent} from "../component/footer/footer";

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    NewArticleComponent,
    SettingsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
