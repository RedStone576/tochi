import get from "../get"

export const endpoint = "/general/activity" as const

export interface Data
{
    activity: Array<any> //
}

export function run()
{
    return get(endpoint)
}
