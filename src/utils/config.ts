
require("dotenv").config();


export const HELLO_COOKIE_SECRET = process.env.HELLO_COOKIE_SECRET as string;
export const CLIENT_ID = process.env.CLIENT_ID as string;
export const HOST = process.env.HOST as string;
export const APP_URL = process.env.APP_URL as string;
export const NODE_ENV = process.env.NODE_ENV as string;
