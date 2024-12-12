# NFT Test Subgraph

This Subgraph sources events from the NFT contract in sepolia network.

## Deploying the subgraph:

**First time only**
```ssh
yarn install
```

Available networks: sepolia (can be extended)

** Sepolia deployment**

First run:

```ssh
goldsky login
```

**Deploy** 

```ssh
yarn prepare:dev
yarn codegen
yarn build
yarn deploy:dev
```
# subgraph
