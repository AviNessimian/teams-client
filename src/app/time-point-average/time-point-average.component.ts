import { Component, OnInit, Input } from '@angular/core';
import { DomainValuesService } from '../core/services/DomainValuesService';
import { CalculateTimepointsAverageRequest } from '../models/requests';
import { TimepointAverage } from '../models/timepoint-average';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-time-point-average',
  templateUrl: './time-point-average.component.html',
  styleUrls: ['./time-point-average.component.scss']
})
export class TimePointAverageComponent implements OnInit {
  @Input() domainName: string;
  timepointAverages: TimepointAverage[];
  graph: any;
  selectedTimepointAverage: TimepointAverage;

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
            marker: { color: '#78C2AD' },
          },
        ],
        layout: {
          autosize: true,
          // width: 320, 
          // height: 300, 
          // title: 'A Fancy Plot',
          xaxis: {
            title: "Timepoint",
            titlefont: {
              family: "Courier New, monospace",
              size: 18,
              color: "#aaa"
            }
          },
          yaxis: {
            title: "Average Value",
            titlefont: {
              family: "Courier New, monospace",
              size: 18,
              color: "#6cc3d5"
            }
          }
        }
      };

    });
  }

  selectTimepointAverage(selectedTimepointAverage: TimepointAverage) {
    this.selectedTimepointAverage = selectedTimepointAverage;
    
    if(!environment.production) console.log(this.selectedTimepointAverage);
  }

}
