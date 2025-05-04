import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
const modifyProducts = async () => {
  try {
    let data = await fs.readFile(PATH_DB, 'utf-8');
    let products = JSON.parse(data);
    const modifiedProducts = products.map(({ name, price, category }) => ({
      name,
      price,
      category,
    }));
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(modifiedProducts, null, 2),
      'utf-8',
    );
    data = await fs.readFile(PATH_DB, 'utf-8');
    products = JSON.parse(data);
    console.log(products);
  } catch (error) {
    console.log(error.message);
  }
};
modifyProducts();
