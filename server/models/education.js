module.exports = (sequelize, DataTypes) => {

    const Education = sequelize.define("education", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        musings: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Education;
};
