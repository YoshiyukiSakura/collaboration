import Layout from "components/layout";
import Home from "components/home";
import Seo from "@/components/seo";

export default function Index({}) {
  const spaces = {
    polkadot: {
      _id: "61dc3e2ee6fce77d0be83c0c",
      id: "polkadot",
      decimals: 10,
      name: "Polkadot",
      proposeThreshold: "10000000000",
      symbol: "DOT",
      voteThreshold: "100000000",
      weightStrategy: ["balance-of", "quadratic-balance-of"],
      networks: [
        {
          network: "polkadot",
          ss58Format: 0,
        },
      ],
      version: "2",
      activeProposalsCount: 1,
      proposalsCount: 2,
    },
    kusama: {
      _id: "61dc3e2ee6fce77d0be83c0d",
      id: "kusama",
      decimals: 12,
      name: "Kusama",
      proposeThreshold: "10000000000",
      symbol: "KSM",
      voteThreshold: "10000000000",
      weightStrategy: ["balance-of", "quadratic-balance-of"],
      networks: [
        {
          network: "kusama",
          ss58Format: 2,
        },
        {
          network: "statemine",
          ss58Format: 2,
        },
        {
          type: "token",
          network: "karura",
          ss58Format: 8,
        },
        {
          type: "token",
          network: "bifrost",
          ss58Format: 6,
        },
        {
          type: "erc20",
          network: "moonriver",
          contract: "0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080",
        },
      ],
      version: "2",
      activeProposalsCount: 1,
      proposalsCount: 1,
    },
    karura: {
      _id: "61dc3e2ee6fce77d0be83c0e",
      id: "karura",
      decimals: 12,
      name: "Karura",
      proposeThreshold: "1000000000000",
      symbol: "KAR",
      voteThreshold: "10000000000",
      weightStrategy: ["balance-of", "quadratic-balance-of", "biased-voting"],
      networks: [
        {
          network: "karura",
          ss58Format: 8,
        },
        {
          type: "erc20",
          network: "moonriver",
          contract: "0xFfFFFFfF08220AD2E6e157f26eD8bD22A336A0A5",
        },
        {
          type: "token",
          network: "bifrost",
          ss58Format: 6,
        },
      ],
      version: "2",
      activeProposalsCount: 0,
      proposalsCount: 1,
    },
    khala: {
      _id: "61dc3e2ee6fce77d0be83c0f",
      id: "khala",
      decimals: 12,
      name: "Khala",
      proposeThreshold: "10000000000000",
      symbol: "PHA",
      voteThreshold: "10000000000",
      weightStrategy: ["balance-of", "quadratic-balance-of"],
      networks: [
        {
          network: "khala",
          ss58Format: 30,
        },
      ],
      version: "2",
      activeProposalsCount: 0,
      proposalsCount: 0,
    },
    rmrk: {
      _id: "61dc3e2ee6fce77d0be83c10",
      id: "rmrk",
      decimals: 10,
      name: "RMRK",
      proposeThreshold: "500000000000000",
      symbol: "RMRK",
      voteThreshold: "10000000000",
      weightStrategy: ["balance-of", "quadratic-balance-of", "biased-voting"],
      networks: [
        {
          type: "asset",
          network: "statemine",
          ss58Format: 2,
          assetId: 8,
        },
        {
          type: "token",
          network: "karura",
          ss58Format: 8,
        },
        {
          type: "token",
          network: "bifrost",
          ss58Format: 6,
        },
        {
          type: "erc20",
          network: "moonriver",
          contract: "0xffffffFF893264794d9d57E1E0E21E0042aF5A0A",
        },
      ],
      version: "2",
      activeProposalsCount: 0,
      proposalsCount: 0,
    },
    "rmrk-curation": {
      _id: "61dc3e2ee6fce77d0be83c11",
      id: "rmrk-curation",
      decimals: 10,
      name: "RMRK Curation",
      proposeThreshold: "4310000000000",
      symbol: "RMRK",
      voteThreshold: "10000000000",
      weightStrategy: ["balance-of", "quadratic-balance-of", "biased-voting"],
      networks: [
        {
          type: "asset",
          network: "statemine",
          ss58Format: 2,
          assetId: 8,
        },
        {
          type: "token",
          network: "karura",
          ss58Format: 8,
        },
        {
          type: "token",
          network: "bifrost",
          ss58Format: 6,
        },
        {
          type: "erc20",
          network: "moonriver",
          contract: "0xffffffFF893264794d9d57E1E0E21E0042aF5A0A",
        },
      ],
      version: "2",
      activeProposalsCount: 2,
      proposalsCount: 25,
    },
    bifrost: {
      _id: "620342fde6fce77d0b110fbe",
      id: "bifrost",
      decimals: 12,
      name: "Bifrost",
      proposeThreshold: "1000000000000",
      symbol: "BNC",
      voteThreshold: "10000000000",
      weightStrategy: ["balance-of", "quadratic-balance-of"],
      networks: [
        {
          network: "bifrost",
          ss58Format: 6,
        },
      ],
      version: "2",
      activeProposalsCount: 0,
      proposalsCount: 0,
    },
    kintsugi: {
      _id: "620342fde6fce77d0b110fbf",
      id: "kintsugi",
      decimals: 12,
      name: "Kintsugi",
      proposeThreshold: "1000000000000",
      symbol: "KINT",
      voteThreshold: "10000000000",
      weightStrategy: ["balance-of", "quadratic-balance-of", "biased-voting"],
      networks: [
        {
          network: "kintsugi",
          ss58Format: 2092,
        },
        {
          type: "token",
          network: "karura",
          ss58Format: 8,
        },
        {
          type: "erc20",
          network: "moonriver",
          contract: "0xfffFFFFF83F4f317d3cbF6EC6250AeC3697b3fF2",
        },
      ],
      version: "2",
      activeProposalsCount: 0,
      proposalsCount: 4,
    },
    polarisdao: {
      _id: "621c2e4be6fce77d0b2b2b9d",
      id: "polarisdao",
      decimals: 8,
      name: "PolarisDAO",
      proposeThreshold: "4000000000000",
      symbol: "ARIS",
      voteThreshold: "1000000",
      weightStrategy: ["balance-of", "quadratic-balance-of", "biased-voting"],
      networks: [
        {
          type: "asset",
          network: "statemine",
          ss58Format: 2,
          assetId: 16,
        },
        {
          type: "token",
          network: "karura",
          ss58Format: 8,
        },
      ],
      version: "2",
      activeProposalsCount: 0,
      proposalsCount: 2,
    },
    chrwna: {
      _id: "6236edc1e6fce77d0b475301",
      id: "chrwna",
      decimals: 10,
      name: "Chrawnna",
      networks: [
        {
          type: "asset",
          network: "statemine",
          ss58Format: 2,
          assetId: 567,
        },
      ],
      proposeThreshold: "50000000000",
      symbol: "CHRWNA",
      version: "2",
      voteThreshold: "1000000000",
      weightStrategy: ["balance-of", "quadratic-balance-of"],
      activeProposalsCount: 0,
      proposalsCount: 2,
    },
    interlay: {
      _id: "624c3326e6fce77d0ba919a8",
      id: "interlay",
      decimals: 10,
      name: "Interlay",
      networks: [
        {
          network: "interlay",
          ss58Format: 2032,
        },
      ],
      proposeThreshold: "10000000000",
      symbol: "INTR",
      version: "2",
      voteThreshold: "10000000000",
      weightStrategy: ["balance-of", "quadratic-balance-of", "biased-voting"],
      activeProposalsCount: 0,
      proposalsCount: 0,
    },
    acala: {
      _id: "624c3326e6fce77d0ba919a9",
      id: "acala",
      decimals: 12,
      name: "Acala",
      networks: [
        {
          network: "acala",
          ss58Format: 10,
        },
      ],
      proposeThreshold: "1000000000000",
      symbol: "ACA",
      version: "2",
      voteThreshold: "10000000000",
      weightStrategy: ["balance-of", "quadratic-balance-of", "biased-voting"],
      activeProposalsCount: 0,
      proposalsCount: 0,
    },
  };

  const hottestProposals = [
    {
      _id: "628bd88e71057becd914cbcc",
      space: "rmrk-curation",
      networksConfig: {
        symbol: "RMRK",
        decimals: 10,
        networks: [
          {
            type: "asset",
            network: "statemine",
            ss58Format: 2,
            assetId: 8,
          },
          {
            type: "token",
            network: "karura",
            ss58Format: 8,
          },
          {
            type: "token",
            network: "bifrost",
            ss58Format: 6,
          },
          {
            type: "erc20",
            network: "moonriver",
            contract: "0xffffffFF893264794d9d57E1E0E21E0042aF5A0A",
          },
        ],
      },
      postUid: "38",
      title: "Curation request: 7472058104f9f93924-SKC",
      content:
        "SubstraKnights 2.0 is a collection consisting of composable characters: the Kusamarauders\n\nKusamarauders start with seven (7) items and one (1) background equipped, the background, which represents a cell, will be the first obstacle to overcome for new holders!\n\nThere are a total of 12 slots (items & background) for each kusamarauder!\n\nWe are using the lego capabilities of RMRK 2.0 for a role playing games on our discord where the NFTs are the game: each week events are taking place and Kusamarauders face ennemies and challenges. They progress in the adventure by equipping new backgrounds and defeating new foes in order to get new items and weapons!\n\nEach item has a POWER stat and the better the POWER stat is, the more chances for the warrior to defeat their opponents!\n\nThree types of events are taking place:\n\n* Fight against the environment, creatures & monsters as they dwell in a hostile habitat\n\n* Tournaments: fight their peers for power, fame, and great rewards!The fight system is simple: Each Kusamarauder and each item has a POWER stat. The total POWER stats of each Kusamarauder will be the sum of all POWER stats from equipped items added to his base POWER. Fighters will then get wheel surface proportional to their POWER. But the combat wheel is unpredictable and of course luck will always play a part.\n\n* Boss event: Kusamarauders sometimes have to team up to fight powerful creatures!\n\nThe collection was featured in a video from the Kusamarian (Jay Chrawna & the WagMedia team) which explains the concept and summarise it pretty well!\n\nSubsocial article: https://app.subsocial.network/6385/substra-knights-2-0-collection-here-come-the-kusamarauders-32388\n\nThe Kusamarian Youtube video about the project: https://www.youtube.com/watch?v=_RW7XymkI_M\n",
      contentType: "markdown",
      choiceType: "single",
      choices: ["aye", "nay"],
      startDate: 1653332040000,
      endDate: 1653948000000,
      snapshotHeights: {
        statemine: 2144067,
        karura: 1949068,
        bifrost: 1782906,
        moonriver: 1884049,
      },
      weightStrategy: ["balance-of", "quadratic-balance-of", "biased-voting"],
      proposer: "FCzwhSLYhFdqdSXXdUM2nGGpgDFit24tX8ajgfXWj49VEwo",
      proposerNetwork: "statemine",
      data: {
        space: "rmrk-curation",
        title: "Curation request: 7472058104f9f93924-SKC",
        content:
          "SubstraKnights 2.0 is a collection consisting of composable characters: the Kusamarauders\n\nKusamarauders start with seven (7) items and one (1) background equipped, the background, which represents a cell, will be the first obstacle to overcome for new holders!\n\nThere are a total of 12 slots (items & background) for each kusamarauder!\n\nWe are using the lego capabilities of RMRK 2.0 for a role playing games on our discord where the NFTs are the game: each week events are taking place and Kusamarauders face ennemies and challenges. They progress in the adventure by equipping new backgrounds and defeating new foes in order to get new items and weapons!\n\nEach item has a POWER stat and the better the POWER stat is, the more chances for the warrior to defeat their opponents!\n\nThree types of events are taking place:\n\n* Fight against the environment, creatures & monsters as they dwell in a hostile habitat\n\n* Tournaments: fight their peers for power, fame, and great rewards!The fight system is simple: Each Kusamarauder and each item has a POWER stat. The total POWER stats of each Kusamarauder will be the sum of all POWER stats from equipped items added to his base POWER. Fighters will then get wheel surface proportional to their POWER. But the combat wheel is unpredictable and of course luck will always play a part.\n\n* Boss event: Kusamarauders sometimes have to team up to fight powerful creatures!\n\nThe collection was featured in a video from the Kusamarian (Jay Chrawna & the WagMedia team) which explains the concept and summarise it pretty well!\n\nSubsocial article: https://app.subsocial.network/6385/substra-knights-2-0-collection-here-come-the-kusamarauders-32388\n\nThe Kusamarian Youtube video about the project: https://www.youtube.com/watch?v=_RW7XymkI_M\n",
        contentType: "markdown",
        choiceType: "single",
        choices: ["aye", "nay"],
        startDate: 1653332040000,
        endDate: 1653948000000,
        snapshotHeights: {
          statemine: 2144067,
          karura: 1949068,
          bifrost: 1782906,
          moonriver: 1884049,
        },
        realProposer: null,
        proposerNetwork: "statemine",
        version: "2",
        timestamp: 1653332087,
      },
      address: "FCzwhSLYhFdqdSXXdUM2nGGpgDFit24tX8ajgfXWj49VEwo",
      signature:
        "0x2e3b49659e924bb24d93e04695929ce79901901607544f04ab685fd0375a4040635812c96e5f6c5643d6ec5ce89a7ba04b41d08bce457b6089f33eff6ce4168a",
      lastActivityAt: "2022-05-27T01:11:40.462Z",
      createdAt: "2022-05-23T18:55:08.999Z",
      updatedAt: "2022-05-23T18:55:08.999Z",
      cid: "QmaagYqmU1xkgfjeCk8Wy65FDbm1xVm8Lt17dyKxjcCt1M",
      pinHash: "QmaagYqmU1xkgfjeCk8Wy65FDbm1xVm8Lt17dyKxjcCt1M",
      version: "2",
      status: "active",
    },
    {
      _id: "628ccfb471057becd914cbcd",
      space: "rmrk-curation",
      networksConfig: {
        symbol: "RMRK",
        decimals: 10,
        networks: [
          {
            type: "asset",
            network: "statemine",
            ss58Format: 2,
            assetId: 8,
          },
          {
            type: "token",
            network: "karura",
            ss58Format: 8,
          },
          {
            type: "token",
            network: "bifrost",
            ss58Format: 6,
          },
          {
            type: "erc20",
            network: "moonriver",
            contract: "0xffffffFF893264794d9d57E1E0E21E0042aF5A0A",
          },
        ],
      },
      postUid: "39",
      title: "Curation request: 36bad3dc147db9792b-ARCHIVERSE_BANNERS",
      content:
        "Archiverse Banners is a limited NFT collection created by Archiverse.\n\nThis collection leverages rmrk 2.0 technology for the first time on a banner.\nThese are composable Archiverse Banner, the base NFTs, where you can insert equippable NFTs.\nSuch as the pictograms of our various buildings, or other exclusive items that you can all find in this child collection: https://singular.app/collections/36bad3dc147db9792b-ARCHIVERSE_BANNERS_ITEMS\n\nThe goal of this collection was first to reward our holders, and at the same time help spread the RMRK 2.0 technology which allows NFTs to be equipped with other NFTs!\n\nWe plan to release more items, and add another banners to the collections later.\nWe will do collaboration with others artists and communities too.\nThe child collection is where we create exclusive items: \n- some of them only airdrop to our holders or winners of different contests\n- some of them for sale at a little price (start at 0,05KSM to encourage accessibility) to collect and decorate the banner\n\nThe background colors correspond to the rarity levels (like our collection Pyramids https://singular.app/collections/36bad3dc147db9792b-PYRAMIDS ) :\n- green: limited\n- rare: blue\n- legendary: gold\n- tailor-made: custom\n\n\nHere the profil of the 2 co-creators who are using that banner:\nhttps://singular.app/space/GA9b4Z86es13jA9tZwakX6fjjo4ZxXVjPPKBsg8iTNYaqcM?page=1&tab=owned&owner=yes\nhttps://singular.app/space/Fvb2GXtmGyRWZ2CKZ5vnF8aQR1CeFBqwThgyEXRv3okdaHY?page=1&tab=owned&owner=yes\n\nHere our twitter post which explains the collection to the community, it receive a welcoming: https://twitter.com/archiverse888/status/1522514360677154816\n\nHere our twitter tutorial post which explains how to use the banner, how to add item and equip them in the banner: https://twitter.com/archiverse888/status/1526534207413035010\n\nHere a subsocial article written by Pnin, where you will find information about us the creators, and our fisrt collection Pyramids:\nhttps://app.subsocial.network/5892/archiverse-how-about-hosting-your-metaverse-party-in-a-31970\n\n\nAnd we thank the RMRK team for making them usable directly in the singular profile, thanks to the necessary technical changes.\n\nThe Archiverse's team",
      contentType: "markdown",
      choiceType: "single",
      choices: ["aye", "nay"],
      startDate: 1653395280000,
      endDate: 1654002000000,
      snapshotHeights: {
        statemine: 2148781,
        karura: 1953786,
        bifrost: 1787532,
        moonriver: 1888622,
      },
      weightStrategy: ["balance-of", "quadratic-balance-of", "biased-voting"],
      proposer: "0xeee3f97f232f3ae0e55d09e08a4df29d40c45e96",
      proposerNetwork: "moonriver",
      data: {
        space: "rmrk-curation",
        title: "Curation request: 36bad3dc147db9792b-ARCHIVERSE_BANNERS",
        content:
          "Archiverse Banners is a limited NFT collection created by Archiverse.\n\nThis collection leverages rmrk 2.0 technology for the first time on a banner.\nThese are composable Archiverse Banner, the base NFTs, where you can insert equippable NFTs.\nSuch as the pictograms of our various buildings, or other exclusive items that you can all find in this child collection: https://singular.app/collections/36bad3dc147db9792b-ARCHIVERSE_BANNERS_ITEMS\n\nThe goal of this collection was first to reward our holders, and at the same time help spread the RMRK 2.0 technology which allows NFTs to be equipped with other NFTs!\n\nWe plan to release more items, and add another banners to the collections later.\nWe will do collaboration with others artists and communities too.\nThe child collection is where we create exclusive items: \n- some of them only airdrop to our holders or winners of different contests\n- some of them for sale at a little price (start at 0,05KSM to encourage accessibility) to collect and decorate the banner\n\nThe background colors correspond to the rarity levels (like our collection Pyramids https://singular.app/collections/36bad3dc147db9792b-PYRAMIDS ) :\n- green: limited\n- rare: blue\n- legendary: gold\n- tailor-made: custom\n\n\nHere the profil of the 2 co-creators who are using that banner:\nhttps://singular.app/space/GA9b4Z86es13jA9tZwakX6fjjo4ZxXVjPPKBsg8iTNYaqcM?page=1&tab=owned&owner=yes\nhttps://singular.app/space/Fvb2GXtmGyRWZ2CKZ5vnF8aQR1CeFBqwThgyEXRv3okdaHY?page=1&tab=owned&owner=yes\n\nHere our twitter post which explains the collection to the community, it receive a welcoming: https://twitter.com/archiverse888/status/1522514360677154816\n\nHere our twitter tutorial post which explains how to use the banner, how to add item and equip them in the banner: https://twitter.com/archiverse888/status/1526534207413035010\n\nHere a subsocial article written by Pnin, where you will find information about us the creators, and our fisrt collection Pyramids:\nhttps://app.subsocial.network/5892/archiverse-how-about-hosting-your-metaverse-party-in-a-31970\n\n\nAnd we thank the RMRK team for making them usable directly in the singular profile, thanks to the necessary technical changes.\n\nThe Archiverse's team",
        contentType: "markdown",
        choiceType: "single",
        choices: ["aye", "nay"],
        startDate: 1653395280000,
        endDate: 1654002000000,
        snapshotHeights: {
          statemine: 2148781,
          karura: 1953786,
          bifrost: 1787532,
          moonriver: 1888622,
        },
        realProposer: null,
        proposerNetwork: "moonriver",
        version: "2",
        timestamp: 1653395376,
      },
      address: "0xeee3f97f232f3ae0e55d09e08a4df29d40c45e96",
      signature:
        "0x980b175a8b8306585adf5c41c36c3ff6ed34d4a333b7dc9eff3e1172ec229ecb1aa84f0a2d1054e03de893f562762dd374b16ffbe09c9a259475f0e5debfbc001c",
      lastActivityAt: "2022-05-27T01:09:55.644Z",
      createdAt: "2022-05-24T12:29:38.953Z",
      updatedAt: "2022-05-24T12:29:38.953Z",
      cid: "QmU55YfjmZ163a3yRrZGFUJKnmqnjJ2sVt13EYXyV1pvwc",
      pinHash: "QmU55YfjmZ163a3yRrZGFUJKnmqnjJ2sVt13EYXyV1pvwc",
      version: "2",
      status: "active",
    },
    {
      _id: "61de87165ed0612403d2c9ac",
      space: "polkadot",
      postUid: "2",
      title: "A demo voting: do U like polkadot?",
      content:
        "This voting is just for demo. It has 2 options:\n- Aye, I like\n- Nay, I don't like\n\nYou can vote either of them without worries because the vote will mean nothing, only if your balance is gte 1 DOT at the snapshotted height.\n\nYou can also post your comments under the discussions tab. Chaos are expected here, so feel free to say anything.",
      contentType: "markdown",
      choiceType: "single",
      choices: ["Aye, I like", "Nay, I don't like"],
      startDate: 1640966400000,
      endDate: 1672502400000,
      weightStrategy: ["balance-of", "quadratic-balance-of"],
      proposer: "12sNU8BXivMj1xQmcd4T39ugCyHjmhir8jkPqfAw5ZDESrx4",
      data: {
        space: "polkadot",
        title: "A demo voting: do U like polkadot?",
        content:
          "This voting is just for demo. It has 2 options:\n- Aye, I like\n- Nay, I don't like\n\nYou can vote either of them without worries because the vote will mean nothing, only if your balance is gte 1 DOT at the snapshotted height.\n\nYou can also post your comments under the discussions tab. Chaos are expected here, so feel free to say anything.",
        contentType: "markdown",
        choiceType: "single",
        choices: ["Aye, I like", "Nay, I don't like"],
        startDate: 1640966400000,
        endDate: 1672502400000,
        snapshotHeight: 8544703,
        realProposer: null,
        version: "1",
        timestamp: 1641973509,
      },
      address: "12sNU8BXivMj1xQmcd4T39ugCyHjmhir8jkPqfAw5ZDESrx4",
      signature:
        "0x5ee7fab47c60b020064907fb3c36fc37ad7753a2c379515f62c2f1969d9a417d9b2e5eedcc8da477c31b2a629810453a6f4c512b0cda0626e4886f86b8965c86",
      lastActivityAt: "2022-05-11T00:43:21.745Z",
      createdAt: "2022-01-12T07:45:25.593Z",
      updatedAt: "2022-01-12T07:45:25.593Z",
      cid: "QmUAwxttXnoBnZRt1x1dsZsvPFshrY1BikULnsdKZmC7kT",
      pinHash: "QmUAwxttXnoBnZRt1x1dsZsvPFshrY1BikULnsdKZmC7kT",
      networksConfig: {
        symbol: "DOT",
        decimals: 10,
        networks: [
          {
            network: "polkadot",
            ss58Format: 0,
          },
        ],
      },
      proposerNetwork: "polkadot",
      snapshotHeights: {
        polkadot: 8544703,
      },
      version: "2",
      status: "active",
    },
    {
      _id: "61de59555ed0612403d2c9ab",
      space: "kusama",
      postUid: "1",
      title: "A demo voting: do U like Kusama?",
      content:
        "This voting is just for demo. It has 2 options:\n1. Aye, I like\n2. Nay, I don't like\n\nYou can vote either of them without worry because the vote will mean nothing, only if your balance is gte 0.01 KSM at the snapshotted height. \n\nYou can also post your and comments under the discussion tab. Chaos are expected here, so feel free to say anything.",
      contentType: "markdown",
      choiceType: "single",
      choices: ["Aye, I like", "Nay, I don't like"],
      startDate: 1640966400000,
      endDate: 1672502400000,
      weightStrategy: ["balance-of", "quadratic-balance-of"],
      proposer: "ESgz7GLVW7BL5DhRgpVnxSXVwaKt4ytWcrf52TY1GQD1cEb",
      data: {
        space: "kusama",
        title: "A demo voting: do U like Kusama?",
        content:
          "This voting is just for demo. It has 2 options:\n1. Aye, I like\n2. Nay, I don't like\n\nYou can vote either of them without worry because the vote will mean nothing, only if your balance is gte 0.01 KSM at the snapshotted height. \n\nYou can also post your and comments under the discussion tab. Chaos are expected here, so feel free to say anything.",
        contentType: "markdown",
        choiceType: "single",
        choices: ["Aye, I like", "Nay, I don't like"],
        startDate: 1640966400000,
        endDate: 1672502400000,
        snapshotHeight: 10925858,
        realProposer: null,
        version: "1",
        timestamp: 1641961801,
      },
      address: "ESgz7GLVW7BL5DhRgpVnxSXVwaKt4ytWcrf52TY1GQD1cEb",
      signature:
        "0x80c9bea4fd13c1faf51f7b4e51751a223d6e86da2d05c180ee860a7792dffb787f6523047d79cf8b36a3aa5eb20ed8f8eefa7327e82e9ecb2e950a2bd3406e82",
      lastActivityAt: "2022-05-05T14:03:02.116Z",
      createdAt: "2022-01-12T04:30:12.382Z",
      updatedAt: "2022-01-12T04:30:12.382Z",
      cid: "QmSvsvm3EZktag86KkcupRAvixFAcByKCho2LLufGG5kj9",
      pinHash: "QmSvsvm3EZktag86KkcupRAvixFAcByKCho2LLufGG5kj9",
      networksConfig: {
        symbol: "KSM",
        decimals: 12,
        networks: [
          {
            network: "kusama",
            ss58Format: 2,
          },
        ],
      },
      proposerNetwork: "kusama",
      snapshotHeights: {
        kusama: 10925858,
      },
      version: "2",
      status: "active",
    },
  ];
  const desc = `One of the governance products powered by OpenSquare. It supports relay chains, para chains and assets on Statemine/Statemint, gas free and voting strategies customizable.`;
  if (!spaces || !hottestProposals) {
    return null;
  }
  return (
    <>
      <Seo desc={desc} />
      <Layout bgHeight="183px">
        <Home
          spaces={spaces}
          hottestProposals={hottestProposals}
          showAllSpace={"1"}
        />
      </Layout>
    </>
  );
}
