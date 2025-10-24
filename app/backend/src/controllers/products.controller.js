import { products } from '../data/products.js';

export function listProducts(req, res) {
  res.json({ data: products, count: products.length });
}
