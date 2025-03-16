import assert from 'node:assert'
import {oneline} from './oneline.js'

const me = 'Espen'
const age = 32
const zero = 0

assert.equal(oneline``, '')
assert.equal(oneline`This should be unmodified`, 'This should be unmodified')
assert.equal(
  oneline`I'm ${me}, I was ${age} when I wrote this`,
  `I'm Espen, I was 32 when I wrote this`,
)
assert.equal(oneline` Leading whitespace should be trimmed`, 'Leading whitespace should be trimmed')
assert.equal(
  oneline`\nLeading whitespace should be trimmed`,
  'Leading whitespace should be trimmed',
)
assert.equal(
  oneline`Trailing whitespace should be trimmed\n\n`,
  'Trailing whitespace should be trimmed',
)
assert.equal(
  oneline` \n  Leading/trailing whitespace should be trimmed\n  \n `,
  'Leading/trailing whitespace should be trimmed',
)
assert.equal(
  oneline`
  This is a few paragraphs of text.
  It should be one line after tagging it.
  Which makes this readable (source-wise),
  but can still be formatted nicely in a terminal.
`,
  'This is a few paragraphs of text. It should be one line after tagging it. Which makes this readable (source-wise), but can still be formatted nicely in a terminal.',
)

assert.equal(
  oneline`As for nullables, like ${null} (obviously), ${zero}, ${undefined} or ${false} it should serialize to… empty for all but zero.`,
  'As for nullables, like  (obviously), 0,  or  it should serialize to… empty for all but zero.',
)
