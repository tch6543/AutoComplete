
export abstract class connectionString{
    static readonly BETA_HOSTNAME:string = "betadb01";
    static readonly PORT:number = 3457;
    static readonly BETA_UID:string = 'devlogin';
    static readonly BETA_PWD:string = 'devlogin01';
    static readonly BETA_AUTOCOMPLETEDB:string = 'autocompletedb';
    static readonly BETA_APIKEYDB:string = 'PropertyShareddb';

}

export const config = {
    Beta: {
        Host: "betadb01",
        Port: 3457,
        Uid: 'devlogin',
        Pass: 'devlogin01',
        ApikeyDb: 'PropertyShareddb'
    }
};

