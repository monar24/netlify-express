"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloConfig = void 0;
const config_1 = require("./config");
exports.helloConfig = {
    client_id: config_1.CLIENT_ID,
    secret: config_1.HELLO_COOKIE_SECRET || 'fallback_secret',
    scope: ['openid', 'name', 'email', 'picture'], // default - openid name email picture
    provider_hint: ['github', 'apple--'],
    routes: {
        loggedIn: '/',
        loggedOut: '/logout',
        error: '/error',
    },
    redirectURI: config_1.APP_URL
    // logConfig?: boolean;
    // apiRoute?: string;
};
