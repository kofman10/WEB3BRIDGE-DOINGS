const ethers = require("ethers");
const daiAbi = require("./abi.json");

const daiContractAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

const getTokenName = async () => {
  try {
    const provider = ethers.getDefaultProvider(
      "https://eth-mainnet.g.alchemy.com/v2/j2LnMMBxlCnU89wjck5Oi5kT_njMKusg"
    );
    const daiContract = new ethers.Contract(
      daiContractAddress,
      daiAbi,
      provider
    );
    const tokenName = await daiContract.name();
    const tokenSupply = await daiContract.totalSupply();
    const tokenS = ethers.utils.formatUnits(tokenSupply, 18);
    const decimals = await daiContract.decimals();
    const balance = await daiContract.balanceOf(
      "0x86a26FF406105a3Bd23f5145b1d425e93723C5e2"
    );
    const balanceS = ethers.utils.formatUnits(balance, 18);

    return { tokenName, tokenS, decimals, balanceS };
  } catch (error) {
    console.error("Error:", error);
  }
};

getTokenName().then((out) => {
  console.log("out:", out);
});
