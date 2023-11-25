var EVMJson=[{
  "name": "Ethereum Mainnet",
  "chain": "ETH",
  "network": "mainnet",
  "icon": "ethereum",
  "rpc": ["https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://ethereum.org",
  "shortName": "eth",
  "chainId": 1,
  "networkId": 1,
  "slip44": 60,
  "ens": {
    "registry": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
  },
  "explorers": [{
    "name": "etherscan",
    "url": "https://etherscan.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "WhaleChain",
  "chain": "WHALE",
  "network": "testnet",
  "rpc": ["https://testnet.whalechain.live"],
  "faucets": [],
  "nativeCurrency": {
    "name": "WhaleChain",
    "symbol": "WHALE",
    "decimals": 9
  },
  "infoURL": "https://whalechain.live",
  "shortName": "WHALE",
  "chainId": 370,
  "networkId": 370,
  "slip44": 40
}];
