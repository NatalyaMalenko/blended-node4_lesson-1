import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const groupProductsByCategories = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);

    const grouped = products.reduce((acc, { name, category }) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(name);
      return acc;
    }, {});

    return grouped;
  } catch (error) {
    console.log(error.message);
  }
};
groupProductsByCategories().then((result) => console.log(result));
