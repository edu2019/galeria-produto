const Sequelize = require("sequelize")
const connection = require("../database/database")

const Product = connection.define("products", {
  code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  provider: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  server: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  image: {
    type: Sequelize.STRING,
    allowNull: false
  }  
})
//Product.sync({force: true})
module.exports = Product