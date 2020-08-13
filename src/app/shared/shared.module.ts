import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
 
PlotlyModule.plotlyjs = PlotlyJS;


@NgModule({
  imports: [CommonModule,
    ToastrModule.forRoot({
      preventDuplicates: false, timeOut: 10000, extendedTimeOut: 10000, progressBar: true, iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      }
    }),
    NgbModule,
    FontAwesomeModule,
    PlotlyModule],

  declarations: [],

  exports: [NgbModule,
    CommonModule,
    FontAwesomeModule,
    PlotlyModule],
  entryComponents: [
  ]
})
export class SharedModule {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }


}
