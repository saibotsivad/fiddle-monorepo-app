/*

Everything in `_env/${RUNTIME}/*` is accessible via `@/env/*` aka you can't access the wrong runtime:

  import { saveJson } from '@/env/save-json.js'

*/

import { dirname } from 'node:path'
import { mkdir, writeFile } from 'node:fs/promises'

export const saveJson = async (filepath, data) => {
  await mkdir(dirname(filepath), { recursive: true })
  await writeFile(filepath, JSON.stringify(data, undefined, 4), 'utf8')
}
