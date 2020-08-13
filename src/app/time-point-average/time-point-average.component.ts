import { Component, OnInit, Input } from '@angular/core';
import { DomainValuesService } from '../core/services/DomainValuesService';
import { CalculateTimepointsAverageRequest } from '../models/requests';
import { TimepointAverage } from '../models/timepoint-average';

@Component({
  selector: 'app-time-point-average',
  templateUrl: './time-point-average.component.html',
  styleUrls: ['./time-point-average.component.scss']
})
export class TimePointAverageComponent implements OnInit {
  @Input() domainName: string;
  timepointAverages: TimepointAverage[];
  graph: any;

  constructor(private domainValuesService: DomainValuesService) { }

  ngOnInit() {

    let requestModel = {
      CollactionName: this.domainName
    } as CalculateTimepointsAverageRequest

    this.domainValuesService.getTimepointsAverage(requestModel).subscribe(timepointAverages => {
      this.timepointAverages = timepointAverages;

      this.graph = {
        data: [
          {
            x: this.timepointAverages.map(a => a.Timepoint),
            y: this.timepointAverages.map(a => a.AverageValue),
            type: 'scatter',
            mode: 'lines+points',
            marker: { color: 'red' }
          },
        ],
        // layout: { width: 320, height: 300, title: 'A Fancy Plot' }
      };

    });
  }

}
