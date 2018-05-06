import test from 'ava'
import * as R from 'ramda'
import { filterObjSimple, filterObjComplicated } from './app.js'

const fruits = {
  orange: {
    sweet: true,
    color: 'orange'
  },
  lemon: {
    sweet: false,
    color: 'green'
  },
  strawberry: {
    sweet: true,
    color: 'red'
  }
}

const sweetFruits = {
  orange: {
    sweet: true,
    color: 'orange'
  },
  strawberry: {
    sweet: true,
    color: 'red'
  }
}

const isSweet = fruit => fruit.sweet

test('Using a bunch of map, filter, reduces', t => {
  t.deepEqual(filterObjComplicated(isSweet, fruits), sweetFruits)
})

test('Using a single reduce', t => {
  t.deepEqual(filterObjSimple(isSweet, fruits), sweetFruits)
})

test('Using Ramda: R.filter', t => {
  t.deepEqual(R.filter(isSweet, fruits), sweetFruits)
})
