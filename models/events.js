module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        bio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        limitGuest: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        guestCost:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        guest: {
            type: DataTypes.STRING,
        }
    })
    Event.associate = function(models) {

        Event.belongsToMany(models.User, {
            as: "guests",
            through: "guestParty",
            foreignKey: "UserId"
        });
      };
    return Event;
}
//seperate by commas and return commas. to query list of guest 1/6 Iman