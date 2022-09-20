import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListCvComponent } from './cvTech/list-cv/list-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { StylesComponent } from './directive/styles/styles.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultPipePipe } from './cvTech/default-pipe.pipe';
import { HiringComponent } from './cvTech/hiring/hiring.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { ErrorComponent } from './cvTech/error/error.component';
import { LoginComponent } from './cvTech/login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginInterceptorPorvider } from './interceptors/login.interceptor';
import { LoginGuard } from './guard/login.guard';
@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    GrandChildComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StylesComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultPipePipe,
    HiringComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailComponent,
    DeleteCvComponent,
    AddCvComponent,
    ErrorComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent,

  ],
  imports: [
    BrowserModule, FormsModule, ROUTING, HttpClientModule,
  ],
  providers: [
    LoginInterceptorPorvider,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
