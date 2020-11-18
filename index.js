#!/usr/bin/env node

import fs from 'fs';

const productListJson = fs.readFileSync('./productList.json', 'utf-8').trim();

const productList = JSON.parse(productListJson);

const getProductName = () => {
  return productList.displayedName.displayedName.value;
}

const createShopsList = () => {
  const shopsInRegion = productList.stock.stocks[34];
  const shopsList = Object.keys(productList.stock.stocks[34]);
  return shopsList.filter((shop) => shopsInRegion[shop] > 0);
}

const findMaxQuantity = () => {
  const shopsInRegion = productList.stock.stocks[34];
  const shopsList = Object.keys(productList.stock.stocks[34]);
  return shopsList.reduce((acc, shop) => {
    const productCount = Number(shopsInRegion[shop]);
    return (productCount > acc.count)
      ? {shopNumber: shop, count: productCount}
      : acc
    },
    ({ shopNumber: 0, count: 0 }));
}

console.log(getProductName());

console.log(createShopsList());

console.log(findMaxQuantity());
