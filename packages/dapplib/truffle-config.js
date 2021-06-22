require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note ridge purchase install argue bracket search'; 
let testAccounts = [
"0x20eb6570615a696ac5243b23eeaaf9758ebfbcedb544eb43857ccc468b41c172",
"0x835199fbbca0a2f831430fef03c684ab1843673f8b4a6d6a2239d817c1bcfa8b",
"0x1e1d48035fb0d76a54a32d046a4da7f0e99d688cb8342e152a1b276bc6f5a69b",
"0xd4812ed4c7305abcdc23e95f4527e03841b0b357606421002336b14662d7e890",
"0xd0fadd1e40c1e5440650ebf0db25bbf86c6453ecd6ff78e57807467de4cf877f",
"0xa6fdb60cbf68397743f79e75605e4e15a7a86312e9678e2d5618bb0af2bbf5b8",
"0xeb9057113461d319574b4fa3f2e2dd5340728fdf75977b366e2ee1b52696e582",
"0x851c2baf25307e5a26acfc07ab79fd85a389a8473744932af0a9b9b74c75c0da",
"0x1f49d2fa149c23279140fdceaaaedf5960dd01d16a99aee332e66dd89b33f2dc",
"0xa8f1413ff2ee0a5a9b0669e910f8f4a6ce108117486358488bb9173b9ceb8d25"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

