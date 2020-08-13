import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DomainValue } from 'src/app/models/domain-value';
import { GetAllDomainValuesRequest, GetDomainValuesByNameRequest, CalculateTimepointsAverageRequest } from 'src/app/models/requests';
import { TimepointAverage } from 'src/app/models/timepoint-average';
import { GetDomainValuesByNameResponse } from 'src/app/models/responses';


@Injectable()
export class DomainValuesService {
    constructor(private http: HttpClient) { }

    get(requestModel: GetAllDomainValuesRequest): Observable<DomainValue[]> {
        var params = new HttpParams({
            fromObject: {
                page: requestModel.Page.toString(),
                pageSize: requestModel.PageSize.toString(),
            }
        });

        return this.http.get<DomainValue[]>(environment.apiDomainValuesUrl, { params: params });
    }

    getByName(requestModel: GetDomainValuesByNameRequest): Observable<GetDomainValuesByNameResponse> {
        // var params = new HttpParams({
        //     fromObject: {
        //         page: requestModel.page.toString(),
        //         pageSize: requestModel.pageSize.toString(),
        //         collactionName: requestModel.collactionName
        //     }
        // });

        // return this.http.get<DomainValue[]>(, { params: params });

        let url = environment.apiDomainValuesUrl
            + '/byname?page=' + requestModel.Page.toString()
            + '&pageSize=' + requestModel.PageSize.toString()
            + '&collactionName=' + requestModel.CollactionName
        return this.http.get<GetDomainValuesByNameResponse>(url);

    }

    getDomainNames(): Observable<string[]> {
        const url: string = environment.apiDomainValuesUrl + '/DomainNames';
        return this.http.get<string[]>(url);
    }


    getTimepointsAverage(requestModel: CalculateTimepointsAverageRequest): Observable<TimepointAverage[]> {
        const url: string = environment.apiDomainValuesUrl + '/TimepointsAverage?CollactionName=' + requestModel.CollactionName;
        return this.http.get<TimepointAverage[]>(url);
    }
}



