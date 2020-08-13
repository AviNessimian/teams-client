import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DomainsComponent } from './domains/domains.component';
import { DomainDetailsComponent } from './domain-details/domain-details.component';
import { TimePointAverageComponent } from './time-point-average/time-point-average.component';


@NgModule({
  declarations: [
    AppComponent,
    DomainsComponent,
    DomainDetailsComponent,
    TimePointAverageComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CoreModule, // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





