import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { VirtualadoptComponent } from './virtualadopt/virtualadopt.component';
import { MruczarniaCardComponent } from './mruczarnia-card/mruczarnia-card.component';
import { MruczarniaListComponent } from './mruczarnia-list/mruczarnia-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    VirtualadoptComponent,
    MruczarniaCardComponent,
    MruczarniaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
