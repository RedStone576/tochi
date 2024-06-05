import get from "./get"
import * as generalStats from "./endpoints/generalStats"

generalStats.run().then(x => 
{
    if (x.success) x.data.usercount
    else x.error
}).catch()
