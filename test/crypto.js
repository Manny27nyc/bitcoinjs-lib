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
var bcrypto = require('../src/crypto')

var fixtures = require('./fixtures/crypto')

describe('crypto', function () {
  ['hash160', 'hash256', 'ripemd160', 'sha1', 'sha256'].forEach(function (algorithm) {
    describe(algorithm, function () {
      fixtures.forEach(function (f) {
        var fn = bcrypto[algorithm]
        var expected = f[algorithm]

        it('returns ' + expected + ' for ' + f.hex, function () {
          var data = Buffer.from(f.hex, 'hex')
          var actual = fn(data).toString('hex')

          assert.strictEqual(actual, expected)
        })
      })
    })
  })
})
