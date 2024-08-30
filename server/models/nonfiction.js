module.exports = (sequelize, DataTypes) => {

    const NonFictions = sequelize.define("nonfictions", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        musings: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return NonFictions;
};
