import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getProductsByMinPrice = async (minPrice) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);

    const filteredProducts = products.filter(
      (product) => parseFloat(product.price) >= minPrice,
    );

    return filteredProducts;
  } catch (error) {
    console.log(error.message);
  }
};

getProductsByMinPrice(800).then((result) => console.log(result));
getProductsByMinPrice(500).then((result) => console.log(result));
getProductsByMinPrice(1000).then((result) => console.log(result));
