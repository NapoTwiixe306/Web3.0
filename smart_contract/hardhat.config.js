// https://eth-ropsten.alchemyapi.io/v2/uogaTe__LDkA2pEokTaYJdMnuNXK0eFF

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/uogaTe__LDkA2pEokTaYJdMnuNXK0eFF',
      accounts: ['c8e286d9fe0700241463e52860931bab424bf4303aae0e61dce1d4b98d4f7eaf'],
    },
  },
};