import get from "../get"

export const endpoint = (type: "40l" | "blitz" | "any", context: "global" | "userbest" | "userrecent", identifier: string | undefined = undefined) => 
(context !== "global") ? `/streams/${type}_${context}_${identifier}` : `/streams/${type}_${context}` as "/streams/{type}_{context}" | "/streams/{type}_{context}_{identifier}"

export interface Data 
{
    records: Array<{
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
    }>
}

// needs polishing zz
export function run(type: "40l" | "blitz" | "any", context: "global" | "userbest" | "userrecent", identifier: string | undefined = undefined)
{
    return get<Data>(endpoint(type, context, identifier))
}
