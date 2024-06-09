# Tochi // トチ

Tetra Channel API Wrapper for Node.js, Modeled after the API itself, Promise-based and Typed.

> [!IMPORTANT]  
> Not Affiliated with TETR.IO or osk.  
> Since TETR.IO is still in alpha, Any overlooked changes made to the game may *break* the library.  
> Honor the API limits and use responsibly.

## Exports

- `generalStats()`
- `generalActivity()`
- `userInfo(user)`
- `userRecords(user)`
- `userSearch(snowflake)`
- `leaderboardLeague(country*, limit*, after*, before*)`
- `leaderboardLeagueAll(country*)`
- `leaderboardXP(country*, limit*, after*, before*)`
- `streams(type, context, id*)`
- `news(stream, limit*)`
- `newsAll(limit*)`
- `get(endpoint)` - generic fetch function
- `endpoints` - contains the API endpoints, uses the same name as the main functions
- `Types` - contains the Type definitions, uses the same name as the main functions

## Example

```ts
import { userInfo } from "tochi"

const res = await userInfo("finbot")

if (res.success) // make sure the request is successful
{
    console.log(res.data.user._id)
    console.log(res.data.user.botmaster)
}
```

```js
const { userSearch } = require("tochi")

userSearch("263872620661964800").then(res => 
{
    if (res.error) return
    console.log(res.data.user._id)
    console.log(res.data.user.username)
})
```

## Links
- [Tetra Channel API Docs](https://tetr.io/about/api/)
- [TETR.IO community dev Discord guild](https://discord.gg/qgrw5J7q8k) (unofficial)
- [Personal Discord guild](https://discord.gg/C2qHe7F)

##  

Bugs report, feedback, and direct messages is appreciated.  

Tochi doesn't mean anything really, just an anagram of "**ch**.**t**,,,.**io**", kana so it looks cool or something.

##  

Distributed under the [Artistic License 2.0](https://www.perlfoundation.org/artistic-license-20.html), made with <3
