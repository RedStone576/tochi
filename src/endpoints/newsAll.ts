import get from "../get"

export const endpoint = (limit: number | undefined = undefined) => (limit !== undefined) ? `/news?limit=${limit}` : "/news" as "/news" | "/news?limit={limit}"

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
