import { CLIENT_ID, HELLO_COOKIE_SECRET, APP_URL } from "./config";

type ScopeType = (
    | "name"
    | "nickname"
    | "preferred_username"
    | "given_name"
    | "family_name"
    | "email"
    | "phone"
    | "picture"
    | "ethereum"
    | "discord"
    | "twitter"
    | "github"
    | "gitlab"
    | "profile"
    | "openid"
    | "profile_update"
  )[];

type ProviderHint =(
    | 'github'
    | 'apple--'
    | 'google'
    | 'microsoft'
    | 'discord'
    | 'twitter'
    | 'facebook'
    | 'ethereum'
    | 'qrcode') [];

export const helloConfig = {
    client_id: CLIENT_ID,
    secret: HELLO_COOKIE_SECRET || 'fallback_secret',
    scope: ['openid','name','email','picture'] as ScopeType, // default - openid name email picture
    provider_hint: ['github', 'apple--'] as ProviderHint, 
    routes: {
        loggedIn: '/',
        loggedOut: '/logout',
        error: '/error',
    },
    redirectURI: APP_URL
    // logConfig?: boolean;
    // apiRoute?: string;
}
