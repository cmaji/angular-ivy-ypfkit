import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { CamelCasePipe } from './camel-case.pipe';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModuleModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CamelCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
