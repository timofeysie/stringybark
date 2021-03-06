import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicModule } from './pages/basic/basic.module';
import { LinesModule } from './pages/lines/lines.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicModule,
    LinesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
