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
// Coins supported by bitgo-bitcoinjs-lib

const typeforce = require('typeforce')

const coins = {
  BCH: 'bch',
  BTC: 'btc',
  BTG: 'btg',
  ZEC: 'zec'
}

coins.isBitcoin = function (value) {
  return typeforce.String(value) && value === coins.BTC
}

coins.isBitcoinCash = function (value) {
  return typeforce.String(value) && value === coins.BCH
}

coins.isBitcoinGold = function (value) {
  return typeforce.String(value) && value === coins.BTG
}

coins.isZcash = function (value) {
  return typeforce.String(value) && value === coins.ZEC
}

module.exports = coins
