import { EnvService } from '../services/environment/env.service';

export const EnvServiceFactory = () => {
    // Create env
    const env = new EnvService();

    const envPrefix = window.location.host.split(/[.]/)[0].split(/[-]/)[0];

    if (envPrefix === 'local' || envPrefix === 'dev' || envPrefix === 'uat' || envPrefix === 'training') {
        env['env'] = envPrefix;
    } else {
        env['env'] = 'prod';
    }

    return env;
};

export const EnvServiceProvider = {
    provide: EnvService,
    useFactory: EnvServiceFactory,
    deps: [],
};
