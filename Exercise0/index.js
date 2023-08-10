const { ethers } = require("ethers");

const sepoliaProvider =
  "https://eth-sepolia.g.alchemy.com/v2/pHq0PHf5OP7JhBP10b1a2oLxjAr2EzI_";
const mainnetProvider =
  "https://eth-mainnet.g.alchemy.com/v2/j2LnMMBxlCnU89wjck5Oi5kT_njMKusg";
const goerliProvider =
  "https://eth-goerli.g.alchemy.com/v2/XZBu0RwLyl3Lt88TPpkZB44Y0nj3w9VA";

const getAccountInfo = async (account) => {
  try {
    const provider = await ethers.getDefaultProvider(mainnetProvider);
    const mainnetBalance = await provider.getBalance(account);
    const mainnetTransactionCount = await provider.getTransactionCount(account);
    const sepoliaProvide = await ethers.getDefaultProvider(sepoliaProvider);
    const sepoliaBalance = await sepoliaProvide.getBalance(account);
    const sepoliaTransactionCount = await provider.getTransactionCount(account);
    const goerliprovide = await ethers.getDefaultProvider(goerliProvider);
    const goerliBalance = await goerliprovide.getBalance(account);
    const goerliTransactionCount = await provider.getTransactionCount(account);
    return {
      mainnetBalance,
      mainnetTransactionCount,
      sepoliaBalance,
      sepoliaTransactionCount,
      goerliBalance,
      goerliTransactionCount,
    };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

let outPromise = getAccountInfo("0x86a26FF406105a3Bd23f5145b1d425e93723C5e2");
outPromise.then((out) => {
  console.log("output:", out);
});
