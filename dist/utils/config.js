"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_URL = exports.HOST = exports.CLIENT_ID = exports.HELLO_COOKIE_SECRET = void 0;
require("dotenv").config();
exports.HELLO_COOKIE_SECRET = process.env.HELLO_COOKIE_SECRET;
exports.CLIENT_ID = process.env.CLIENT_ID;
exports.HOST = process.env.HOST;
exports.APP_URL = process.env.APP_URL;
