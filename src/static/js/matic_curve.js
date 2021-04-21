
$(function() {
  consoleInit();
  start(main);
});

async function main() {  
  const App = await init_ethers();

  _print(`Initialized ${App.YOUR_ADDRESS}\n`);
  _print("Reading smart contracts...\n");

  const tokens = {};
  const prices = await getMaticPrices();

  await getCurveToken(App);
  
  hideLoading();
}

async function getCurveToken(App) {
  const minterAddress = "0x445FE580eF8d70FF569aB36e80c647af338db351"
  const tokenAddress = "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171"
  const crv = new ethers.Contract(tokenAddress, CURVE_ABI, App.provider);
  const minter = new ethers.Contract(minterAddress, MINTER_ABI, App.provider)
  //const virtualPrice = await minter.get_virtual_price();
  const coin0 = await minter.coins(0);
  const coin1 = await minter.coins(1);
  const coin2 = await minter.coins(2);
  const token0 = await getMaticToken(App, coin0, minterAddress);
  const token1 = await getMaticToken(App, coin1, minterAddress);
  const token2 = await getMaticToken(App, coin2, minterAddress);
  const decimals = await crv.decimals();
  //const symbol = await crv.symbol();
  //const usersTotalBalance = await crv.balanceOf(App.YOUR_ADDRESS) / 10 ** decimals
  const totalCurveStaked = token0.staked + token1.staked + token2.staked;
  const pct0 = token0.staked / totalCurveStaked * 100
  const pct1 = token1.staked / totalCurveStaked * 100
  const pct2 = token2.staked / totalCurveStaked * 100
  //_print(`${symbol}`);
 // _print(`Users Balance ${usersTotalBalance}`);
  _print(`${token0.symbol} ${formatMoney(token0.staked)} (${pct0.toFixed(2)}%)`);
  _print(`${token1.symbol} ${formatMoney(token1.staked)} (${pct1.toFixed(2)}%)`);
  _print(`${token2.symbol} ${formatMoney(token2.staked)} (${pct2.toFixed(2)}%)`);
  _print(`${token0.symbol}+${token1.symbol}+${token2.symbol}: ${formatMoney(totalCurveStaked)}`);
}

/*return {
  address,
  name,
  symbol,
  totalSupply,
  decimals : decimals,
  staked:  staked / 10 ** decimals,
  unstaked: unstaked  / 10 ** decimals,
  contract: curve,
  tokens : [address, coin0],
  token,
  virtualPrice : virtualPrice / 1e18
};*/