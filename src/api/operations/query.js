module.exports = `
type Query {
  product(id: Int): Product,
  products: [Product]
  categories: [Category]
}
`;