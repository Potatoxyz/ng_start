import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {route} from "./app.routing";
import {PagesModule} from "./pages/pages.module";
import {NgZorroAntdModule} from "ng-zorro-antd";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route,{useHash:true}),
    PagesModule,
    NgZorroAntdModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
