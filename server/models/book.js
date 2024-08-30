module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define("books", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      condition: {
        type: DataTypes.ENUM("excellent", "good", "fair", "bad"),
        allowNull: false,
      },
      review: {
        type: DataTypes.TEXT,
      },
      original_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      seller_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seller_contact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seller_address: {
        type: DataTypes.TEXT,
      },
      upi_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Books;
  };
  