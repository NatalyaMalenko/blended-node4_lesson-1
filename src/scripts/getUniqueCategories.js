import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
const getUniqueCategories = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);

    const uniqueCategories = products.reduce((acc, product) => {
      return acc.includes(product.category) ? acc : [...acc, product.category];
    }, []);

    console.log('Унікальні категорії:', uniqueCategories);

    return uniqueCategories;
  } catch (error) {
    console.log(error.message);
  }
};
getUniqueCategories();
