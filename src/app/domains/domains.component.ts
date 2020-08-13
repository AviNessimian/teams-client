import { Component, OnInit } from '@angular/core';
import { DomainValuesService } from '../core/services/DomainValuesService';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {
  domainNames: string[];
  constructor(private  domainValuesService : DomainValuesService) { }

  ngOnInit() {

    this.domainValuesService.getDomainNames().subscribe(domainNames=>{
      this.domainNames = domainNames
    });
  }

}
