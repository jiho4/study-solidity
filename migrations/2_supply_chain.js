const ERC20Token = artifacts.require("./ERC20Token.sol");
const SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
    deployer.deploy(ERC20Token, 10000, "Test Hamster Token", 18, "THT");
    deployer.deploy(SupplyChain);
};