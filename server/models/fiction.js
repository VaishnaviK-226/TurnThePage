module.exports = (sequelize, DataTypes) => {

    const Fiction = sequelize.define("fiction", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        musings: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Fiction;
};
