import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { FormsModule } from '@angular/forms';
import { HoverHighlightDirective } from './custom-directive/hover-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BindingDemoComponent,
    HoverHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
