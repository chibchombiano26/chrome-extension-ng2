interface ICustomer {
    CompanyName: string;
    FirstName: string;
    LastName: string;
    Key: string
}

export class Customer implements ICustomer {
    constructor (public FirstName: string, public LastName: string, public Key: string, public CompanyName: string ) {

    }
}