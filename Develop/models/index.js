// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id'
})
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})


Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'product_id',
  as: 'products'
})

Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tag_id',
  as: 'tags'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
