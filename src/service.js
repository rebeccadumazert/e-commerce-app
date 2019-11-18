import axios from 'axios';
async function getProducts() {
  const { data: results } = await axios.get(
    'https://gist.githubusercontent.com/stackerine/e99122e7548d02446698d04b996475f0/raw/b1b3bc9f788fd06900863f4c8350159637d209c5/products.json'
  );
  return results;
}
export default getProducts;
