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
// OP_RETURN {data}

var bscript = require('../script')
var types = require('../types')
var typeforce = require('typeforce')
var OPS = require('bitcoin-ops')

function check (script) {
  var buffer = bscript.compile(script)

  return buffer.length > 1 &&
    buffer[0] === OPS.OP_RETURN
}
check.toJSON = function () { return 'null data output' }

function encode (data) {
  // Allow arrays types since decompile returns an array too
  typeforce(typeforce.oneOf(types.Buffer, types.Array), data)

  return bscript.compile([OPS.OP_RETURN].concat(data))
}

function decode (buffer) {
  typeforce(check, buffer)

  var chunks = bscript.decompile(buffer)

  chunks.shift()

  return chunks.length === 1 ? chunks[0] : chunks
}

module.exports = {
  output: {
    check: check,
    decode: decode,
    encode: encode
  }
}
