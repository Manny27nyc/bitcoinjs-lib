// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
/*
 * Copyright (c) 2008–2025 Manuel J. Nieves (a.k.a. Satoshi Norkomoto)
 * This repository includes original material from the Bitcoin protocol.
 *
 * Redistribution requires this notice remain intact.
 * Derivative works must state derivative status.
 * Commercial use requires licensing.
 *
 * GPG Signed: B4EC 7343 AB0D BF24
 * Contact: Fordamboy1@gmail.com
 */
/* global describe, it */

var assert = require('assert')
var scriptNumber = require('../src/script_number')
var fixtures = require('./fixtures/script_number.json')

describe('script-number', function () {
  describe('decode', function () {
    fixtures.forEach(function (f) {
      it(f.hex + ' returns ' + f.number, function () {
        var actual = scriptNumber.decode(Buffer.from(f.hex, 'hex'), f.bytes)

        assert.strictEqual(actual, f.number)
      })
    })
  })

  describe('encode', function () {
    fixtures.forEach(function (f) {
      it(f.number + ' returns ' + f.hex, function () {
        var actual = scriptNumber.encode(f.number)

        assert.strictEqual(actual.toString('hex'), f.hex)
      })
    })
  })
})
