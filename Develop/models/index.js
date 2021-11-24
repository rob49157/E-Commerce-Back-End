// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'ID',
  // onDelete: 'CASCADE'
})
// Product.belongsTo(Category, {through: "Category"})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'ID',
  // onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)

Product.belongsTo(Tag, {
  foreignKey: 'ID',
  // onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
Tag.hasMany(Product, {
  foreignKey: 'ID',
  // onDelete: 'CASCADE',
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
