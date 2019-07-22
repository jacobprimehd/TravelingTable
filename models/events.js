module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        Bio: {
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
        host: {
            type: DataTypes.INTEGER, // hosts ID associate
            allowNull: false
        },
        limitGuest: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        guest: {
            type: DataTypes.STRING,
        }
    })
    Event.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Event.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Event;
}
//seperate by commas and return commas. to query list of guest 1/6 Iman