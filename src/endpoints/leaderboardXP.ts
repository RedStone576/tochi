import get from "../get"

export function endpoint(country: string | undefined = undefined, 
limit: number | undefined = undefined, 
after: number | undefined = undefined, 
before: number| undefined = undefined)
{
    let e = "/users/lists/xp"
    
    if (country !== undefined) e += e.includes("?") ? `&country=${country}` : `?country=${country}`
    if (limit   !== undefined) e += e.includes("?") ? `&limit=${limit}`     : `?limit=${limit}`
    if (after   !== undefined) e += e.includes("?") ? `&after=${after}`     : `?after=${after}`
    if (before  !== undefined) e += e.includes("?") ? `&before=${before}`   : `?before=${before}`
    
    return e as "/users/lists/xp" | "/users/lists/xp?country={country}&limit={limit}&after={after}&before={before}"
} 

export interface Data
{
    users: Array<{
        _id: string
        username: string
        role: "banned" | "anon" | "user" | "bot" | "halfmod" | "mod" | "admin" | "sysop"
        ts: string | undefined
        country: string | null
        supporter: boolean
        verified: boolean
        xp: number
        gamesplayed: number
        gameswon: number
        gametime: number
    }>
}

export function run(country: string | undefined = undefined, 
limit: number | undefined = undefined, 
after: number | undefined = undefined, 
before: number| undefined = undefined)
{
    return get<Data>(endpoint(country, limit, after, before))
}
