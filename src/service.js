import axios from 'axios';
import isPlainObject from 'lodash.isplainobject';
import isArray from 'lodash.isarray';
async function getProducts() {
  const { data: results } = await axios.get(
    'https://gist.githubusercontent.com/stackerine/e99122e7548d02446698d04b996475f0/raw/b1b3bc9f788fd06900863f4c8350159637d209c5/products.json'
  );
  return results;
}

async function getProductsTried() {
  const { data: results } = await axios.get(
    'https://gist.githubusercontent.com/stackerine/e99122e7548d02446698d04b996475f0/raw/b1b3bc9f788fd06900863f4c8350159637d209c5/catalog.json'
  );
  console.log('results', results);
  return results;
}

function getProductAtCatalog(catalog) {
  if (isArray(catalog)) {
    return catalog;
  } else if (isPlainObject(catalog)) {
    return Object.values(catalog).reduce((acc, val) => {
      if (isArray(val)) {
        return [...acc, ...val];
      }
      return [...acc, ...getProductAtCatalog(val)];
    }, []);
  }
}

export { getProducts, getProductsTried, getProductAtCatalog };
