import { get, Response } from "../get"

export const endpoint = (user: string) => `/users/${user}/records` as "/users/{username}/records" | "/users/{userID}/records"

interface RecordStructure
{
    _id: string
    stream: string
    replayid: string
    
    user: {
        _id: string
        username: string
    }
    
    ts: string
    ismulti?: boolean
    endcontext: any | Array<any> //
}

export interface Data
{
    records: {
        "40l": {
            record: RecordStructure | null
            rank: number | null
        }
        
        blitz: {
            record: RecordStructure | null
            rank: number | null
        }
    }
    
    zen: {
        level: number
        score: number
    }
}

export function run(user: string): Response<Data>
{
    return get<Data>(endpoint(user.toLowerCase()))
}
