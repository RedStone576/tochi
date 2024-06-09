import get from "../get"

export const endpoint = (snowflake: string) => `/users/search/${snowflake}` as "/users/search/{snowflake}"

export interface Data
{
    user: {
        _id: string
        username: string
    }
}

export function run(snowflake: string)
{
    return get<Data | null>(endpoint(snowflake))
}
