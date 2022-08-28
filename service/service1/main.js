import { saveJson } from '@/runtime/save-json.js'
import { makeBig } from '@/lib/make-big.js'
import { toBase64 } from '@/shared/strings.js'

const json = await saveJson('./example.json', { foo: makeBig('bar'), secret: toBase64('battery-horse-staple') })

console.log(json)
