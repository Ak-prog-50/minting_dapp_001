# Minting Dapp 001 🕶

# NFT minting dapp 🔥

This repo is a fully customized version of Hashlips minting dapp. Acts as the entry level template for nft minting dapps. 

Fireabse Url = https://minting-dapp-001.web.app/


## Usage ℹ️

To link up a existing smart contract, go to the `public/config/config.json` file and update the following fields to fit your smart contract, network and marketplace details. The cost field should be in wei.

Note: this dapp is designed to work with the intended NFT smart contract, that only takes one parameter in the mint function "mintAmount". But you can change that in the App.js file if you need to use a smart contract that takes 2 params.

```json
{
  "CONTRACT_ADDRESS": "0x827acb09a2dc20e39c9aad7f7190d9bc53534192",
  "SCAN_LINK": "https://polygonscan.com/token/0x827acb09a2dc20e39c9aad7f7190d9bc53534192",
  "NETWORK": {
    "NAME": "Polygon",
    "SYMBOL": "Matic",
    "ID": 137
  },
  "NFT_NAME": "Ugly Eyes",
  "SYMBOL": "UE",
  "MAX_SUPPLY": 1000,
  "WEI_COST": 75000000000000000,
  "DISPLAY_COST": 0.075,
  "GAS_LIMIT": 285000,
  "MARKETPLACE": "Opeansea",
  "MARKETPLACE_LINK": "https://opensea.io/collection/nerdy-coder-clones",
  "SHOW_BACKGROUND": false
}
```

Make sure to copy the contract ABI from remix and paste it in the `public/config/abi.json` file.

One image is needed which is logo.png. Which is displayed in main page and reveal page.

Next change the theme colors to your liking in the `public/config/theme.css` file.

```css
:root {
  --primary: #ebc908;
  --primary-text: #1a1a1a;
  --secondary: #ff1dec;
  --secondary-text: #ffffff;
  --accent: #ffffff;
  --accent-text: #000000;
}
```

Now you will need to create and change the `public/favicon.ico`, `public/logo192.png`, and
`public/logo512.png` to your brand images.

Remember to update the title and description the `public/index.html` file

```html
<title>Ugly Eyes</title>
<meta name="description" content="Ugly Eyes dapp v2" />
```

Also remember to update the short_name and name fields in the `public/manifest.json` file

```json
{
  "short_name": "UE",
  "name": "Ugly Eyes NFT"
}
```



## Firebase Hosting Process

```sh
//check for firebase-tools
npm list -g
```

```sh
npm install firebase / yarn add firebase
```

```sh
firebase login
```

```sh
firebase init
```

```sh
npm run build
```

```sh
firebase deploy
```

