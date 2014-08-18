var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('fa52efb4'),
  addressVersion: 53,
  privKeyVersion: 191,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0585b21e,
  hkeyPrivateVersion: 0x0585ade4,
  genesisBlock: {
    hash: hex('0000056b32c6be1fab675fcd7a371154031cd7321efd48d75dd3b404edfe15e5'),
    merkle_root: hex('e67bd0b2c8a4b61af92a0d2b2af9969c51745de7faa98a9b92d0e83969e5d0d5'),
    height: 0,
    nonce: 1029576,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1408137516,
    bits: 504365055,
  },
  dnsSeeds: [
    '104.128.234.163'
  ],
  defaultClientPort: 23789
};

exports.testnet = {
  name: 'testnet',
  magic: hex('0711050b'),
  addressVersion: 0x7f,
  privKeyVersion: 255,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('726fad846b2d5101883f0d5fea8f732d8a49ec0828c8ed475238c1870a910000'),
    merkle_root: hex('e67bd0b2c8a4b61af92a0d2b2af9969c51745de7faa98a9b92d0e83969e5d0d5'),
    height: 0,
    nonce: 55887,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1405769613,
    bits: 0x1f00ffff,
  },
  dnsSeeds: [
    'testnet.nightmarecoin.com'
  ],
  defaultClientPort: 51997
};
