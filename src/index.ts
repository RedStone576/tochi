import get from "./get"
import { run } from "./endpoints/userSearch"

async function h()
{
    const res = await run("24247827")

    if (!res.success) return
    if (res.data === null) return

    res.data.user.username
}
