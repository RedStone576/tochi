export { get } from "./get"
export * as endpoints from "./endpoints"
export type * as Types from "./types"

export { run as generalStats } from "./endpoints/generalStats"
export { run as generalActivity } from "./endpoints/generalActivity"

export { run as userInfo } from "./endpoints/userInfo"
export { run as userRecords } from "./endpoints/userRecords"
export { run as userSearch } from "./endpoints/userSearch"

export { run as leaderboardLeague } from "./endpoints/leaderboardLeague"
export { run as leaderboardLeagueAll } from "./endpoints/leaderboardLeagueAll"
export { run as leaderboardXP } from "./endpoints/leaderboardXP"

export { run as streams } from "./endpoints/streams"

export { run as news } from "./endpoints/news"
export { run as newsAll } from "./endpoints/newsAll"

/*
hello :3 
the current to-dos is:
- lower ecmascript target version
- `fetch` injection thingy
- some more polishing
- docs? idk
- improve structures zzz
*/
