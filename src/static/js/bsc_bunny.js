$(function() {
consoleInit(main)
});

const BUNNY_CHEF_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"vault","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BunnyRewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"vault","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NotifyDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"vault","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NotifyWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"BUNNY","outputs":[{"internalType":"contract BunnyToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"}],"name":"addVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bulkUpdateRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bunnyPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bunnyPerBlock","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"contract IBunnyMinterV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"notifyDeposited","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"notifyWithdrawn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"pendingBunny","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"safeBunnyTransfer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bunnyPerBlock","type":"uint256"}],"name":"setBunnyPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"}],"name":"timeMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"tokenSupplyOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"updateRewardsOf","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"}],"name":"updateVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"vaultInfoOf","outputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accBunnyPerShare","type":"uint256"}],"internalType":"struct IBunnyChef.VaultInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"vaultUserInfoOf","outputs":[{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"pending","type":"uint256"},{"internalType":"uint256","name":"rewardPaid","type":"uint256"}],"internalType":"struct IBunnyChef.UserInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}]
const BUNNY_STAKING_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPaused","type":"bool"}],"name":"PauseChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Recovered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newDuration","type":"uint256"}],"name":"RewardsDurationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"apy","outputs":[{"internalType":"uint256","name":"_usd","type":"uint256"},{"internalType":"uint256","name":"_bunny","type":"uint256"},{"internalType":"uint256","name":"_bnb","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getRewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"helper","outputs":[{"internalType":"contract IStrategyHelper","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"info","outputs":[{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"principal","type":"uint256"},{"internalType":"uint256","name":"available","type":"uint256"},{"components":[{"internalType":"uint256","name":"usd","type":"uint256"},{"internalType":"uint256","name":"bunny","type":"uint256"},{"internalType":"uint256","name":"bnb","type":"uint256"}],"internalType":"struct Profit","name":"profit","type":"tuple"},{"internalType":"uint256","name":"poolTVL","type":"uint256"},{"components":[{"internalType":"uint256","name":"usd","type":"uint256"},{"internalType":"uint256","name":"bunny","type":"uint256"},{"internalType":"uint256","name":"bnb","type":"uint256"}],"internalType":"struct APY","name":"poolAPY","type":"tuple"}],"internalType":"struct UserInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPauseTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"presaleBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"principalOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"profitOf","outputs":[{"internalType":"uint256","name":"_usd","type":"uint256"},{"internalType":"uint256","name":"_bunny","type":"uint256"},{"internalType":"uint256","name":"_bnb","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverBEP20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IStrategyHelper","name":"_helper","type":"address"}],"name":"setHelper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsDistribution","type":"address"}],"name":"setRewardsDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"}],"name":"setRewardsDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"setRewardsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"permission","type":"bool"}],"name":"setStakePermission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"stakeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tvl","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"withdrawableBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

const Vaults = [
  "0xa6C29a422D1612293669156a34f2793526783622", //BUNNY-BNB FLIP Boost
  "0xb037581cF0cE10b04C4735443d95e0C93db5d940", //BUNNY Boost
  //"0xEDfcB78e73f7bA6aD2D829bf5D462a0924da28eD", //CAKE
  //"0xA599d6b81eC4a5DDd8eCa85e3AAc31E006aF00AA", //CAKE-BNB FLIP
  //"0x203Ee29ba85BbDfA23bFaE5D77620AeFDaf92cB1", //CAKE-BNB FLIP CAKE Maximizer
  //"0x285F793CE97079D4a5712E616AFBbb971Dbf1f1f", //BTCB-BNB FLIP
  //"0xac20925e6615ad6871987e199783Fa80Bf24EB39", //BTCB-BNB FLIP CAKE Maximizer
  //"0x0d17e7B77C678C79C3ab5176e164FF0BCceb8EAa", //ETH-BNB FLIP
  //"0x7D52a1697F2dF08E6fb2b5A88E0E8e4D7C11a921", //ETH-BNB FLIP CAKE Maximizer
  //"0xE0aca387C6600b455CCFC32B253e2DB13b71ca62", //BUSD-BNB FLIP
  //"0x81fa6F9F4599c5316Cc53B782DE7c01EFf4f9551", //BUSD-BNB FLIP CAKE Maximizer
  //"0x633e538EcF0bee1a18c2EDFE10C4Da0d6E71e77B", //USDT-BNB FLIP
  //"0xac7D40638271D349cb2DeDfdC6268A77738403Fa", //USDT-BNB FLIP CAKE Maximizer
  //"0xC341c6a006cab105E8CD2518e25aaB311Cb22FF6", //USDT-BUSD FLIP
  //"0x74fdc215f8309Ec58Fd34455bf3Fee95FB3416dD", //USDT-BUSD FLIP CAKE Maximizer
  //"0xFdb7D4AbD0109b36667946726dF943E83570286C", //VAI-BUSD FLIP
  //"0x7f0320cef62C88CE1DB7d77c1849082C053E2344", //VAI-BUSD FLIP CAKE Maximizer
  "0x52cFa188A1468A521A98eaa798E715Fbb9eb38a3", //BNB
  "0x22af73683dee5D266B0c36c37D0Fd62c402Fd250", //ETH
  "0x549d2e2B4fA19179CA5020A981600571C2954F6a", //BTCB
  "0x0Ba950F0f099229828c10a9B307280a450133FFc", //USDT
  "0x0243A20B20ECa78ddEDF6b8ddb43a0286438A67A"  //BUSD
]

const Pools = [
  "0xCADc8CB26c8C7cB46500E61171b5F27e9bd7889D"  //BUNNY
].map(a => {
  return {
    address : a,
    abi : BUNNY_STAKING_ABI,
    rewardTokenFunction : "rewardsToken",
    stakeTokenFunction : "stakingToken"
  }
})

async function main() {
  const App = await init_ethers();

  _print(`Initialized ${App.YOUR_ADDRESS}\n`);
  _print("Reading smart contracts...\n");

 const BUNNY_CHEF_ADDR = "0x40e31876c4322bd033BAb028474665B12c4d04CE";
 const BUNNY_CHEF = new ethers.Contract(BUNNY_CHEF_ADDR, BUNNY_CHEF_ABI, App.provider);

 const rewardTokenTicker = "BUNNY"

 const rewardsPerWeek = await BUNNY_CHEF.bunnyPerBlock() /1e18
      * 604800 / 3;

  const tokens = {};
  const prices = await getBscPrices();

  await loadBunnyChefContract(App, tokens, prices, BUNNY_CHEF, BUNNY_CHEF_ADDR, BUNNY_CHEF_ABI, rewardsPerWeek, Vaults, "BUNNY",
    "pendingBunny", rewardTokenTicker);

  _print("");

    let p = await loadMultipleBscSynthetixPools(App, tokens, prices, Pools)
    _print_bold(`Total staked: $${formatMoney(p.staked_tvl)}`);
    if (p.totalUserStaked > 0) {
      _print(`You are staking a total of $${formatMoney(p.totalUserStaked)} at an APR of ${(p.totalAPR * 100).toFixed(2)}%\n`);
    }

  hideLoading();
}

async function loadBunnyChefContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardsPerWeekFixed, vaults, rewardTokenFunction,
  pendingRewardsFunction, rewardTokenTicker) {
  const chefContract = chef;

  const poolCount = vaults.length;
  const totalAllocPoints = await chefContract.totalAllocPoint();
    
  _print(`<a href='https://bscscan.com/address/${chefAddress}' target='_blank'>Staking Contract</a>`);
  _print(`Found ${poolCount} pools.\n`)

  _print(`Showing incentivized pools only.\n`);

  var tokens = {};

  const rewardTokenAddress = await chefContract.callStatic[rewardTokenFunction]();
  const rewardToken = await getBscToken(App, rewardTokenAddress, chefAddress);
  const rewardsPerWeek = rewardsPerWeekFixed

  const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
    await getBscPoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction, vaults)));

  var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

  await Promise.all(tokenAddresses.map(async (address) => {
      tokens[address] = await getBscToken(App, address, chefAddress);
  }));

  const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "bsc") : undefined);


  _print("Finished reading smart contracts.\n");    

  let aprs = []
  for (i = 0; i < poolCount; i++) {
    if (poolPrices[i]) {
      const apr = printChefPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
        totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
        pendingRewardsFunction, null, null, "bsc", poolInfos[i].depositFee, poolInfos[i].withdrawFee)
      aprs.push(apr);
    }
  }
  let totalUserStaked=0, totalStaked=0, averageApr=0;
  for (const a of aprs) {
    if (!isNaN(a.totalStakedUsd)) {
      totalStaked += a.totalStakedUsd;
    }
    if (a.userStakedUsd > 0) {
      totalUserStaked += a.userStakedUsd;
      averageApr += a.userStakedUsd * a.yearlyAPR / 100;
    }
  }
  averageApr = averageApr / totalUserStaked;
  _print_bold(`Total Staked: $${formatMoney(totalStaked)}`);
  if (totalUserStaked > 0) {
    _print_bold(`\nYou are staking a total of $${formatMoney(totalUserStaked)} at an average APR of ${(averageApr * 100).toFixed(2)}%`)
    _print(`Estimated earnings:`
        + ` Day $${formatMoney(totalUserStaked*averageApr/365)}`
        + ` Week $${formatMoney(totalUserStaked*averageApr/52)}`
        + ` Year $${formatMoney(totalUserStaked*averageApr)}\n`);
  }
  return { prices, totalUserStaked, totalStaked, averageApr }

}

async function getBscPoolInfo(App, chefContract, chefAddress, i, pendingRewardsFunction, vaults) {  
  const poolInfo = await chefContract.vaultInfoOf(vaults[i]);
  if (poolInfo.allocPoint == 0) {
    return {
      address: poolInfo.lpToken ?? poolInfo.token,
      allocPoints: poolInfo.allocPoint ?? 1,
      poolToken: null,
      userStaked : 0,
      pendingRewardTokens : 0,
      stakedToken : null,
      userLPStaked : 0,
      lastRewardBlock : poolInfo.lastRewardBlock
    };
  }
  const poolToken = await getBscToken(App, poolInfo[0], chefAddress);  //token is 0 of array
  poolToken.staked = await chefContract.tokenSupplyOf(vaults[i]) / 10 ** poolToken.decimals;
  const userInfo = await chefContract.vaultUserInfoOf(vaults[i], App.YOUR_ADDRESS);
  const pendingRewardTokens = await chefContract.callStatic[pendingRewardsFunction](vaults[i], App.YOUR_ADDRESS);
  const staked = userInfo[0] / 10 ** poolToken.decimals;
  return {
      address: poolInfo.lpToken ?? poolInfo.token,
      allocPoints: poolInfo[1] ?? 1,  //allocPoint is 1 of array
      poolToken: poolToken,
      userStaked : staked,
      pendingRewardTokens : pendingRewardTokens / 10 ** 18,
      depositFee : (poolInfo.depositFeeBP ?? 0) / 100,
      withdrawFee : (poolInfo.withdrawFeeBP ?? 0) / 100
  };
}