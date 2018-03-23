import {Routes} from "@angular/router";

export const route:Routes=[
  {path:'',redirectTo:'pages/index',pathMatch:'full'},
  {path:'**',redirectTo:'pages/index'},
];
