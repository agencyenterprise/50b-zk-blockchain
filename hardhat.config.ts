import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "./scripts/deposit";

dotenv.config();

const DEPLOYER_PRIVATE_KEY: any = process.env.DEPLOYER_PRIVATE_KEY;

const POLYGON_TESTNET_RPC_URL: any = process.env.POLYGON_TESTNET_RPC_URL;
const POLYGON_TESTNET_ETHERSCAN_API_KEY: any =
  process.env.POLYGON_TESTNET_ETHERSCAN_API_KEY;

const MORPH_TESTNET_RPC_URL: any = process.env.MORPH_TESTNET_RPC_URL;
const MORPH_TESTNET_ETHERSCAN_API_KEY: any =
  process.env.MORPH_TESTNET_ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    polygonTestnet: {
      url: POLYGON_TESTNET_RPC_URL,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    morphTestnet: {
      url: MORPH_TESTNET_RPC_URL,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonTestnet: POLYGON_TESTNET_ETHERSCAN_API_KEY,
      morphTestnet: MORPH_TESTNET_ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "polygonTestnet",
        chainId: 80002,
        urls: {
          apiURL:
            "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
          browserURL: "https://www.oklink.com/polygonAmoy",
        },
      },
      {
        network: "morphTestnet",
        chainId: 2710,
        urls: {
          apiURL: "https://explorer-api-testnet.morphl2.io/api ",
          browserURL: "https://explorer-testnet.morphl2.io/",
        },
      },
    ],
  },
};

export default config;
