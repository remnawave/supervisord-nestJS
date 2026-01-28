interface ISupervisordConfigOptions {
    username: string;
    password: string;
}

export interface ISupervisordConfig {
    connectionUrl: string;
    options?: ISupervisordConfigOptions;
}
