import { get, Response } from "../get"

export function endpoint(country: string | undefined = undefined, 
limit: number | undefined = undefined, 
after: number | undefined = undefined, 
before: number| undefined = undefined)
{
    let e = "/users/lists/league"
    
    if (country !== undefined) e += e.includes("?") ? `&country=${country}` : `?country=${country}`
    if (limit   !== undefined) e += e.includes("?") ? `&limit=${limit}`     : `?limit=${limit}`
    if (after   !== undefined) e += e.includes("?") ? `&after=${after}`     : `?after=${after}`
    if (before  !== undefined) e += e.includes("?") ? `&before=${before}`   : `?before=${before}`
    
    return e as "/users/lists/league" | "/users/lists/league?country={country}&limit={limit}&after={after}&before={before}"
}

export interface Data
{
    users: Array<{
        _id: string
        username: string
        role: "banned" | "anon" | "user" | "bot" | "halfmod" | "mod" | "admin" | "sysop"
        xp: number
        country: string | null
        supporter: string
        verified: boolean

        league: {
            gamesplayed: number
            gameswon: number
            rating: number
            rank: number
            bestrank: string
            glicko?: number
            rd?: number
            apm?: number
            pps?: number
            vs?: number
            decaying: boolean
        }
    }>
}

export function run(country: string | undefined = undefined, 
limit: number | undefined = undefined, 
after: number | undefined = undefined, 
before: number| undefined = undefined): Response<Data>
{
    if (country !== undefined) country = country.toUpperCase()

    return get<Data>(endpoint(country, limit, after, before))
}
