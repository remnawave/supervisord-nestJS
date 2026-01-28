interface ISupervisordConfigOptions {
    username: string;
    password: string;
}

export interface ISupervisordModuleOptions {
    connectionUrl: string;
    options?: ISupervisordConfigOptions;
}
