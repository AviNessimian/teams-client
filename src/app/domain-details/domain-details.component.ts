import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomainValuesService } from '../core/services/DomainValuesService';
import { GetDomainValuesByNameRequest } from '../models/requests';
import { DomainValue } from '../models/domain-value';

@Component({
  selector: 'app-domain-details',
  templateUrl: './domain-details.component.html',
  styleUrls: ['./domain-details.component.scss']
})
export class DomainDetailsComponent implements OnInit {
  domainValues: DomainValue[] = null;
  domainName: string
  collactionCount: number;
  page: number;
  pageSize: number;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private domainValuesService: DomainValuesService) {
    this.domainName = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 5;
    this.loadDomainValues();
  }

  pageValueChange(value: number) {
    this.page = value;
    this.loadDomainValues();
  }

  pageSizeValueChange(value: number) {
    this.pageSize = value;
    this.loadDomainValues();
  }

  private loadDomainValues() {
    let requestModel = {
      Page: this.page,
      PageSize: this.pageSize,
      CollactionName: this.domainName
    } as GetDomainValuesByNameRequest;

    this.domainValuesService.getByName(requestModel).subscribe(responseModel => {
      this.domainValues = responseModel.DomainValues;
      this.collactionCount = responseModel.CollactionCount;
    });
  }
}



