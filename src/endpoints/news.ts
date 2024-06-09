import { get, Response } from "../get"

export const endpoint = (stream: string, limit: number | undefined = undefined) => (limit !== undefined) ? `/news/${stream}?limit=${limit}` : `/news/${stream}` as "/news/{stream}" | "/news/{stream}?limit={limit}"

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

export function run(stream: string, limit: number | undefined = undefined): Response<Data>
{
    return get<Data>(endpoint(stream, limit))
}
