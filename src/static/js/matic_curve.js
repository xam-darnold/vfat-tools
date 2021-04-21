
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


  
  hideLoading();
}

async function getCurveToken(App, tokenAddress){
  const crv = new ethers.Contract(tokenAddress, CURVE_ABI, App.provider);
  const minterAddress = "0x445FE580eF8d70FF569aB36e80c647af338db351"
  const res = await createCurveToken(App, crv, tokenAddress, minterAddress);
  window.localStorage.setItem(tokenAddress, "Curve");
  return res;
}

async function createCurveToken(App, curve, address, minterAddress) {
  const minter = new ethers.Contract(minterAddress, MINTER_ABI, App.provider)
  const virtualPrice = await minter.get_virtual_price();
  const coin0 = await minter.coins(0);
  const token = await getMaticToken(App, coin0, address);
  const decimals = await curve.decimals();
  const usersBalance = await curve.balanceOf(App.YOUR_ADDRESS)
  return {
      address,
      name : await curve.name(),
      symbol : await curve.symbol(),
      totalSupply : await curve.totalSupply(),
      decimals : decimals,
      usersBalance: usersBalance  / 10 ** decimals,
      contract: curve,
      tokens : [address, coin0],
      token,
      virtualPrice : virtualPrice / 1e18
  };
}