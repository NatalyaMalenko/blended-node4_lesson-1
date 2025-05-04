import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

const generateProducts = async (number) => {
  try {
    const newProducts = [];
    for (let i = 0; i < number; i++) {
      newProducts.push(createFakeProduct());
    }

    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);

    const updatedProducts = [...products, ...newProducts];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedProducts, null, 2),
      'utf-8',
    );

    return updatedProducts;
  } catch (error) {
    console.log(error.message);
  }
};

generateProducts(10);
