function filterObj (predicate, object) {
  return Object.keys(object)
    .map(k => [k, object[k]])
    .filter(([key, val]) => predicate(val))
    .map(([key, val]) => ({[key]: val}))
    .reduce((pre, cur) => Object.assign({}, pre, cur), {})
}

module.exports = {filterObj}
