import get from "../get"

export const endpoint = (stream: string, limit: number | undefined = undefined) => limit !== undefined : `/news/${stream}?limit=${limit}` : `/news/${stream}`

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

export function run(stream: string, limit: number | undefined = undefined)
{
    return get<Data>(endpoint(string, limit))
}
