import get from "../get"

export const endpoint = "/general/stats" as const

export interface Data
{
    usercount: number
    usercount_delta: number
    anoncount: number
    totalaccounts: number
    rankedcount: number
    replaycount: number
    gamesplayed: number
    gamesplayed_delta: number
    gamesfinished: number
    gametime: number
    inputs: number
    piecesplaced: number
}

export function run()
{
    return get<Data>(endpoint)
}
