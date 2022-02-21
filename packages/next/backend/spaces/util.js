const { getApi, getTotalBalance, getTokenBalance } = require("../services/node.service");
const { getSpaceCollection } = require("../mongo");

function getNetworkIdentity(network) {
  switch (network) {
    case "kusama":
      return {
        network: "kusama",
        ss58Format: 2,
      };
    default:
      return undefined;
  }
}

function createSpace(spaceConfig) {
  const { symbol, networks } = spaceConfig;

  return {
    ...spaceConfig,

    // A asset can be appear on multiple networks,
    // Each network has its own identity and api connection
    // The method to read token balance on different networks could be different
    networks: networks?.map(network => {
      const { type, network: networkName, assetId, identity } = network;

      const _getApi = () => getApi(networkName);
      const _getBalance = async (blockHeight, address) => {
        const api = await _getApi();
        if (type === "asset") {
          return await getTokenBalance(api, assetId, blockHeight, address);
        } else if (type === "token") {
          return await getTokenBalance(api, symbol, blockHeight, address);
        } else {
          return await getTotalBalance(api, blockHeight, address);
        }
      };

      return {
        ...network,
        identity: getNetworkIdentity(identity),
        getApi: _getApi,
        getBalance: _getBalance,
      };
    }),
  };
}

async function getSpaces() {
  const spaceCol = await getSpaceCollection();
  const spaceConfigs = await spaceCol.find({}).toArray();
  return spaceConfigs.map(spaceConfig => {
    const space = createSpace(spaceConfig);
    return space;
  });
}

module.exports = {
  getSpaces,
};
