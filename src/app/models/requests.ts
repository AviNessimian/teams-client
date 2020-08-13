 class GetBaseRequest{
    Page:number;
    PageSize:number;
}

export class GetAllDomainValuesRequest extends GetBaseRequest{    
}

export class GetDomainValuesByNameRequest extends GetBaseRequest{
    CollactionName:string;
}

export class CalculateTimepointsAverageRequest {
    public CollactionName: string;
}