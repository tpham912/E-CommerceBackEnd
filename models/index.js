// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Categories have many Products

Categories.hasMany(Product, { 
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
  
})

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tags, {
  through: ProductTag,
  unique: false
})

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  unique: false

})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
