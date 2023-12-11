// 2023/12/02 20:52:19 Server started at https://dingservice.app:443
// ├─ REST API: https://dingservice.app:443/api/
// └─ Admin UI: https://dingservice.app:443/_/

import PocketBase from 'pocketbase'

const pb = new PocketBase('https://dingservice.app')

export default pb
