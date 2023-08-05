const { ethers } = require('ethers');

const nodeProvider = 'https://eth-mainnet.g.alchemy.com/v2/j2LnMMBxlCnU89wjck5Oi5kT_njMKusg'

const getAccountInfo = async (account) => {
    try {
        const provider = await ethers.getDefaultProvider(nodeProvider);
        const balance = await provider.getBalance(account)
        const transactionCount = await provider.getTransactionCount(account)
        const code = await provider.getCode(account)
        return { balance, transactionCount, code } ;
    } catch (error) {
        console.error('Error:', error);
    throw error;
    }

}

let outPromise = getAccountInfo('0x1F98431c8aD98523631AE4a59f267346ea31F984');
outPromise.then((out) => {
    console.log("output:", out)
    if(out.code == '0x') {
        console.log('this is an externally owned account')
    } else {
        console.log('this is a contract account')
    }
})