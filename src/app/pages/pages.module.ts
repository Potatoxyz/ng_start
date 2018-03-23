import { NgModule } from '@angular/core';
import {PagesComponent} from "./pages.component";
import { IndexComponent } from './index/index.component';
import {RouterModule} from "@angular/router";
import {route} from "./pages.routing";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    PagesComponent,
    IndexComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(route),
    NgZorroAntdModule.forRoot(),
  ],
  providers: []
})
export class PagesModule { }
