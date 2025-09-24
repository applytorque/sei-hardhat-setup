import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloSei", function () {
  let HelloSei, helloSei, owner, addr1;

  beforeEach(async function () {
    HelloSei = await ethers.getContractFactory("HelloSei");
    [owner, addr1] = await ethers.getSigners();
    helloSei = await HelloSei.deploy("Initial message");
    await helloSei.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await helloSei.owner()).to.equal(owner.address);
    });

    it("Should set the initial message", async function () {
      expect(await helloSei.getMessage()).to.equal("Initial message");
    });
  });

  describe("Message updates", function () {
    it("Should update the message", async function () {
      const newMessage = "Updated message";
      await helloSei.updateMessage(newMessage);
      expect(await helloSei.getMessage()).to.equal(newMessage);
    });

    it("Should emit MessageUpdated event", async function () {
      const newMessage = "Test message";
      await expect(helloSei.updateMessage(newMessage))
        .to.emit(helloSei, "MessageUpdated")
        .withArgs(newMessage, owner.address);
    });
  });
});