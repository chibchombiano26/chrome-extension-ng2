interface IStaff {
    FirstName: string;
    LastName: string;
    Key: string
}

export class Staff implements IStaff {
    constructor (public FirstName: string, public LastName: string, public Key: string) {

    }
}