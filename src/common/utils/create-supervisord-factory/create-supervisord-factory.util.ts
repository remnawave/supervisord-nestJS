import { Logger } from '@nestjs/common';
import { ISupervisordConfig } from './interfaces';
import { SupervisordClient } from '@kastov/node-supervisord';

const logger = new Logger('supervisor-nestjs');

export function createSupervisordFactory(moduleOptions: ISupervisordConfig): SupervisordClient {
    const supervisor = new SupervisordClient(moduleOptions.connectionUrl, moduleOptions.options);
    logger.log(`[OK] SupervisorD initialized`);
    return supervisor;
}
