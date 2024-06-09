import get from "../get"

export const endpoint = (user: string) => `/users/${user}` as "/users/{username}" | "/users/{userID}"

//this is still pretty loose
export interface Data
{
    user: {
        _id: string
        username: string
        role: "banned" | "anon" | "user" | "bot" | "halfmod" | "mod" | "admin" | "sysop"
        ts: string | undefined
        botmaster: string | undefined
        
        badges: Array<{
            id: string
            label: string
            ts: string | undefined
        }>
        
        xp: number 
        gamesplayed: number
        gameswon: number
        gametime: number
        country: string | null //
        badstanding: boolean | undefined
        supporter: boolean
        supporter_tier: 0 | 1 | 2 | 3 | 4
        verified: boolean //
        
        league: {
            gamesplayed: number
            gameswon: number
            rating: number
            rank: string
            bestrank: string
            standing: number
            standing_local: number
            next_rank: string | null
            prev_rank: string | null
            next_at: number
            prev_at: number
            percentile: number
            percentile_rank: string
            glicko?: number
            rd?: number
            apm?: number
            pps?: number
            vs?: number
            decaying: boolean
        }
        
        avatar_revision?: number
        banner_revision?: number
        bio?: string
        
        connections: { 
            discord?: {
                id: string
                username: string
            }
        }
        
        friend_count: number
        
        distinguishment: {
            type: string //
        }
    }
}

export function run(user: string)
{
    return get<Data>(endpoint(user))
}
