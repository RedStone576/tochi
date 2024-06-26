import { request } from "https"

type Nullish<T> = T | null | undefined

interface ResponseCache
{
    status: "hit" | "miss" | "awaited"
    cached_at: number
    cached_until: number
}

interface ResponseSuccess<T>
{
    success: true
    data: T
    cache: Nullish<ResponseCache>
}

interface ResponseFailed
{
    success: false
    error: string
    cache: Nullish<ResponseCache>
}

export type Response<T> = Promise<ResponseSuccess<T> | ResponseFailed>

const xSession = `SESS-${Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)}`

export function get<T>(endpoint: string): Promise<ResponseSuccess<T> | ResponseFailed> 
{
    return new Promise<ResponseSuccess<T> | ResponseFailed>((resolve, reject) => 
    {
        const req = request({
            hostname: "ch.tetr.io",
            path: `/api${endpoint}`,
            method: "GET",
            port: 443,
            headers: {
                "Content-Type": "application/json", // me when no theorypack -. -
                "X-Session-ID": xSession
            }
        }, 
        
        (res) => 
        {
            let data = ""
            
            res.setEncoding("utf8")
            
            res.on("data", (part) => data += part)
            res.on("error", (e: unknown) => reject(e))
            res.on("end", () => 
            {
                const response = JSON.parse(data)

                // returns ResponseSucces<Data<T>>
                if (!!response.success) return resolve({
                    success: true,
                    data: response.data,
                    cache: response.cache
                })

                // returns ResponseFailed
                else return resolve({
                    success: false,
                    error: response.error,
                    cache: response.cache
                })
                
            })
        })
    
        req.end()
    })
}
