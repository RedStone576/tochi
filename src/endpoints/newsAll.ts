import get from "../get"

export const endpoint = (limit: number | undefined = undefined) => limit !== undefined : `/news?limit=${limit}` : "/news"

export interface Data
{
    news: Array<{
        _id: string
        stream: string
        type: string
        ts: string
        data: any //
    }>
}

export function run(limit: number | undefined = undefined)
{
    return get<Data>(endpoint(limit))
}
