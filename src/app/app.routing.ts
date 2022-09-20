import { Routes, RouterModule, Router } from "@angular/router";
import { ColorComponent } from "./color/color.component";
import { AddCvComponent } from "./cvTech/add-cv/add-cv.component";
import { CvComponent } from "./cvTech/cv/cv.component";
import { DetailComponent } from "./cvTech/detail/detail.component";
import { ErrorComponent } from "./cvTech/error/error.component";
import { LoginComponent } from "./cvTech/login/login.component";
import { UpdateCvComponent } from "./cvTech/update-cv/update-cv.component";
import { LoginGuard } from "./guard/login.guard";
import { LogoutGuard } from "./guard/logout.guard";

const APP_ROUTING: Routes = [
  {
    path: 'cv', children: [
      { path: '', component: CvComponent },

      { path: 'updateCv/:id', component: UpdateCvComponent },
      { path: 'add', component: AddCvComponent, canActivate: [LoginGuard] },
      { path: ':id', component: DetailComponent },

    ]
  },
  { path: '', component: CvComponent },
  { path: 'color', component: ColorComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: '**', component: ErrorComponent },


];

export const ROUTING = RouterModule.forRoot(APP_ROUTING)

