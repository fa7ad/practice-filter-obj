function filterObjComplicated (predicate, object) {
  return Object.keys(object)
    .map(k => [k, object[k]])
    .filter(([key, val]) => predicate(val))
    .map(([key, val]) => ({ [key]: val }))
    .reduce((pre, cur) => Object.assign({}, pre, cur), {})
}

function filterObjSimple (predicate, object) {
  return Object.keys(object).reduce(
    (pre, cur) =>
      Object.assign(
        {},
        pre,
        predicate(object[cur]) ? { [cur]: object[cur] } : {}
      ),
    {}
  )
}

module.exports = { filterObjComplicated, filterObjSimple }
