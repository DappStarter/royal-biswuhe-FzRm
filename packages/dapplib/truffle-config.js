require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'include knock flame success stomach cruise soccer upgrade half civil army genius'; 
let testAccounts = [
"0xd4d497ba2c38caffef9b510127f48bcc264e7c54031721454e985aa144a93c87",
"0x6b198079d4d0a9c5db17dd4f3783f19d97d8c2a373becd286d402b8b1a9cbfe0",
"0xdd38e72bd0cb4d1ae86e69258ebaa35b72ec91bc8381513ddc2cb3c36b24a470",
"0xcfccae971133a0d11ef09657c4dfb3e463b1907e684637403c3614243af63172",
"0xcb9979d79c3f93995dfb676e65065e85ac2f5d84d646ec2322055f3f9e54dd98",
"0x3677d4d5c298f24912d141a94d7586a6b04d4806db35c43182b707d634e675f1",
"0xcec8111ca4433887bcc39a1b3cff57465edddb49835572d8b4e724825b576eaf",
"0x5a1025e2daf9e3c33518b9976f1f7c05f0c520b99ff764a3b5271ba20dfa39b0",
"0x63c0c4ae6abb8ee6eb711536c3fee30837db62f389ca46c6074c8dcc2d2c548c",
"0x79a8c937bec3666226b042715fdd396c6f1564d44f3f4e6ca17cd2465fe1c297"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


