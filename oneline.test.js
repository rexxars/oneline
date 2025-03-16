import assert from 'node:assert'
import {oneline} from './oneline.js'

const tester = await (typeof Bun === 'undefined'
  ? await import('node:test')
  : await import('bun:test'))

const test = tester.test

const me = 'Espen'
const age = 32
const zero = 0

test('empty string', () => {
  assert.equal(oneline``, '')
})

test('no interpolation, no newlines', () => {
  assert.equal(oneline`This should be unmodified`, 'This should be unmodified')
})

test('interpolation and newlines', () => {
  assert.equal(
    oneline`I'm ${me}, I was ${age} when I wrote this`,
    `I'm Espen, I was 32 when I wrote this`,
  )
})

test('trim leading whitespace', () => {
  assert.equal(
    oneline` Leading whitespace should be trimmed`,
    'Leading whitespace should be trimmed',
  )

  assert.equal(
    oneline`\nLeading whitespace should be trimmed`,
    'Leading whitespace should be trimmed',
  )
})

test('trim trailing whitespace', () => {
  assert.equal(
    oneline`Trailing whitespace should be trimmed\n\n`,
    'Trailing whitespace should be trimmed',
  )
})

test('trim leading + trailing whitespace', () => {
  assert.equal(
    oneline` \n  Leading/trailing whitespace should be trimmed\n  \n `,
    'Leading/trailing whitespace should be trimmed',
  )
})

test('multiple lines', () => {
  assert.equal(
    oneline`
    This is a few paragraphs of text.
    It should be one line after tagging it.
    Which makes this readable (source-wise),
    but can still be formatted nicely in a terminal.
  `,
    'This is a few paragraphs of text. It should be one line after tagging it. Which makes this readable (source-wise), but can still be formatted nicely in a terminal.',
  )
})

test('nullables', () => {
  assert.equal(
    oneline`As for nullables, like ${null} (obviously), ${zero}, ${undefined} or ${false} it should serialize to… empty for all but zero.`,
    'As for nullables, like  (obviously), 0,  or  it should serialize to… empty for all but zero.',
  )
})
