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
var Buffer = require('safe-buffer').Buffer
var bufferutils = require('./bufferutils')
var varuint = require('varuint-bitcoin')

function BufferWriter (bufferSize) {
  this.buffer = Buffer.allocUnsafe(bufferSize)
  this.offset = 0
}

BufferWriter.prototype.getBuffer = function () {
  return this.buffer
}

BufferWriter.prototype.writeSlice = function (slice) {
  this.offset += slice.copy(this.buffer, this.offset)
}

BufferWriter.prototype.writeInt32 = function (input) {
  this.offset = this.buffer.writeInt32LE(input, this.offset)
}

BufferWriter.prototype.writeUInt32 = function (input) {
  this.offset = this.buffer.writeUInt32LE(input, this.offset)
}

BufferWriter.prototype.writeUInt64 = function (input) {
  this.offset = bufferutils.writeUInt64LE(this.buffer, input, this.offset)
}

BufferWriter.prototype.writeVarInt = function (input) {
  varuint.encode(input, this.buffer, this.offset)
  this.offset += varuint.encode.bytes
}

BufferWriter.prototype.writeVarSlice = function (slice) {
  this.writeVarInt(slice.length)
  this.writeSlice(slice)
}

module.exports = BufferWriter
