export const clientId = "0zuarw2s00p8z3hy0kxcr3q5ufc7gm"
export const redirectUri = "http://localhost:3000"
export const authorizationUrl = "https://id.twitch.tv/oauth2/authorize"

export const scope = "channel%3Amanage%3Apolls+channel%3Aread%3Apolls+user:read:follows"
export const state = "c3ab8aa609ea11e793ae92361f002671"
export const auth = "auth"
export enum Status{
    LOADING = 'loading',
    SUSCESS = 'suscess',
    ERROR = 'error'
}