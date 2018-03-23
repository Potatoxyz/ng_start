import {Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {IndexComponent} from "./index/index.component";

export const route:Routes=[
  {
    path:'pages',
    component:PagesComponent,
    children:[
    {path:'index',component:IndexComponent}
    ]
  },
];
