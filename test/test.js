const { expect } = require('chai');

describe("ElonNFT", function() {

    it("should return correct name and symbol", async function () {

        const ElonNFT = await hre.ethers.getContractFactory("ElonNFT");

        const ElonNFTDeployed = await ElonNFT.deploy("ElonMusk", 
        "ELON");

        await ElonNFTDeployed.deployed(); 

        expect(await ElonNFTDeployed.name()).to.equal("ElonMusk");
        expect(await ElonNFTDeployed.symbol()).to.equal("ELON");
    });

});
