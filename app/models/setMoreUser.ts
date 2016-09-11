interface ISetMoreUser {
    username: string;
    password: string;
}

export class SetMoreUser implements ISetMoreUser {
    constructor (public username: string, public password: string) {

    }
}

interface IService {
    Apptcount: number;
    ColorCode: string;
    CompanyKey: string;
    Cost: number;
    Duration: number;
    Rates: number;
    ResourceKey: string;
    ServiceName: string;
    Status: string;    
    blobkey: string;
    bufferDuration: number;
    imageURL: string;
    key: string;
}

export class Service implements IService {  
    constructor (
         public Apptcount: number,
         public ColorCode: string,
         public CompanyKey:string,
         public Cost: number,
         public Duration: number,
         public Rates: number,
         public ResourceKey: string,
         public ServiceName: string,
         public Status: string,
         public blobkey: string,
         public bufferDuration: number,
         public imageURL: string,
         public key: string
         ) {

    }
}