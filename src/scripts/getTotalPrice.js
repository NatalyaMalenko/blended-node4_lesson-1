import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getTotalPrice = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);

    const totalPrice = products.reduce((sum, product) => {
      return (sum += parseFloat(product.price));
    }, 0);

    console.log(`Загальна вартість: ${totalPrice.toFixed(2)}`);
    return totalPrice;
  } catch (error) {
    console.log(error.message);
  }
};
getTotalPrice();
