module.exports = (sequelize, DataTypes) => {

    const Orders = sequelize.define("orders", {
        book_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_price: {
            type: DataTypes.VIRTUAL,
            get() {
               
                return this.getDataValue('price') * this.getDataValue('quantity');
            },
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'pending',
        },
    }, {
      
        primaryKey: ['book_id', 'customer_id'],
    });

    return Orders;
};
