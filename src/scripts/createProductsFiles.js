// опишіть функцію createProductsFiles.

// Вона має створювати в папці files таку кількість файлів,
// скільки продуктів є в масиві у файлі src / db / db.json.В кожному
// файлі має бути записаний об'єкт продукту.Назва кожного файлу повинна
// бути представлені у вигляді назви продукти(кожне слово через дефіс) з форматом json.
// Наприклад, luxurious - soft - soap.json

import fs from 'node:fs/promises';
import path from 'node:path';
import { PATH_DB, PATH_FILES_DIR } from '../constants/products.js';

const createProductsFiles = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);

    for (const product of products) {
      const fileName =
        product.name.toLowerCase().replace(/\s+/g, '-') + '.json';
      const filePath = path.join(PATH_FILES_DIR, fileName);

      await fs.writeFile(filePath, JSON.stringify(product, null, 2), 'utf-8');
    }
  } catch (error) {
    console.log(error.message);
  }
};
createProductsFiles();
