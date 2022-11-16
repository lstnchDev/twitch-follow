export interface IOnlineFollows{
    items:[],
    status: 'loading'| 'suscess' | 'error'
}
export type IApiIds = {
    user_id: string,
    token_id: string
}