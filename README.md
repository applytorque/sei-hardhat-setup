# sei-hardhat-setup

npx hardhat compile

npx hardhat run scripts/deploy.js --network seitestnet


# Test locally first
npm run node              # Start local node
npm run deploy:local      # Deploy to local network

# Deploy to testnet
npm run deploy:testnet    # Deploy to Sei testnet

# Interact with deployed contract
npm run interact:testnet  # (update contract address in script first)

# Run tests
npm test
