// WARNING: DO NOT DELETE THIS FILE
// This file was auto-generated by the Witnet compiler, any manual changes will be overwritten.
const WitnetRequestsBoardProxy = artifacts.require("WitnetRequestsBoardProxy")
const MockWitnetRequestsBoard = artifacts.require("MockWitnetRequestsBoard")
const CBOR = artifacts.require("CBOR")
const Witnet = artifacts.require("Witnet")

const addresses = {
  "goerli": {
    "BlockRelayProxy": "0xbF36475B8245a51B6f5F4ABeF852725ED302DD9b",
    "CBOR": "0x26D81f33AaCfa5B68B944C52f98Db9733CcaB3c4",
    "Witnet": "0x559A2af1F61c3aE990fCC4B370857fB1F95525ca",
    "WitnetRequestsBoardProxy": "0xFBd67d672C12B130b61320026E5B681f9040bCd3",
  },
  "rinkeby": {
    "BlockRelayProxy": "0x21FC161EB3b958f256bF303dEb32755cFe33bbbd",
    "CBOR": "0x609217CE0352D0935cA82cE1B1b04A4d54A3A849",
    "Witnet": "0x36a9B745C5d531C1b51fcD9fB87902b3d1876cFd",
    "WitnetRequestsBoardProxy": "0x996Be500EBF09537EDde024f70fFdFA55089E939",
  },
}

module.exports = function (deployer, network) {
  network = network.split("-")[0]
  if (network in addresses) {
    Witnet.address = addresses[network]["Witnet"]
    WitnetRequestsBoardProxy.address = addresses[network]["WitnetRequestsBoardProxy"]
  } else {
    deployer.deploy(CBOR)
    deployer.link(CBOR, Witnet)
    deployer.deploy(Witnet)
    deployer.deploy(MockWitnetRequestsBoard).then(function() {
      return deployer.deploy(WitnetRequestsBoardProxy, MockWitnetRequestsBoard.address)
    })

  }
}
