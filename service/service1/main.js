import { saveJson } from '@/runtime/save-json.js'
import { makeBig } from '@/lib/make-big.js'

await saveJson('/path/to/json', { foo: makeBig('bar') })
