module.exports = (strings, ...keys) => {
  return strings
    .reduce((result, part, i) => {
      const val = i > keys.length - 1 ? '' : keys[i]
      return result + part + (val === 0 ? '0' : val || '')
    }, '')
    .replace(/(?:\n(?:\s*))+/g, ' ')
    .trim()
}
