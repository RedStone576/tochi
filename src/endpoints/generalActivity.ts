import { get, Response } from "../get"

export const endpoint = "/general/activity" as const

export interface Data
{
    activity: Array<any> //
}

export function run(): Response<Data>
{
    return get(endpoint)
}
