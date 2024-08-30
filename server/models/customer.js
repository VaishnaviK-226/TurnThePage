// models/customer.js
module.exports = (sequelize, DataTypes) => {
    const Customers = sequelize.define("customers", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      confirm_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Customers;
  };
  