"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloConfig = void 0;
const config_1 = require("./config");
const isLocal = config_1.NODE_ENV !== "production";
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
    redirectURI: isLocal
        ? "http://localhost:8888/.netlify/functions/api/hellocoop?op=auth"
        : "https://splendorous-nasturtium-c1e9ae.netlify.app/.netlify/functions/api/hellocoop?op=auth",
    // logConfig?: boolean;
    // apiRoute?: string;
};
