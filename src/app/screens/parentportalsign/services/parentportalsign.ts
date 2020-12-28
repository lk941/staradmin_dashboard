export class ParentPortalSign {
    Email: string;
    PhoneNo: number;
    Password: string;
    roles: Roles;

    // constructor(authData) {
    //     this.Email    = authData.Email
    //     this.PhoneNo = authData.PhoneNo
    //     this.Password = authData.Password
    //     this.roles    = { reader: true }
    // }
}

export interface Roles {
    reader: boolean;
    author?: boolean;
    admin?:  boolean;
}