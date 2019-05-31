import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "../component/home/home";
import {NewArticleComponent} from "../component/new-article/new-article";
import {SignInComponent} from "../component/sign-in/sign-in";
import {SignUpComponent} from "../component/sign-up/sign-up";
import {SettingsComponent} from "../component/settings/settings";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'new-article', component: NewArticleComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
