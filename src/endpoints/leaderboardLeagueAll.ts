import get from "../get"

export const endpoint = (country: string | undefined = undefined) => 
country === undefined ? "/users/lists/league/all" : `/users/lists/league/all?country=${country}`

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

export function run(country: string | undefined = undefined)
{
    if (country !== undefined) country = country.toUpperCase()

    return get<Data>(endpoint(country))
}
