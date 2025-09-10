export const APP_CONFIG = {
    CHAT_ID: '5195906026',

    TOKEN: '7904236127:AAGl1BF9xsGS3yNjMvMTnVUrqP68Cccqbv8',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 5
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
