const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// Define the User model by extending the Sequelize Model class
class User extends Model {
  // Method to check if the provided password matches the stored hashed password
  checkPassword(loginPW) {
    return bcrypt.compareSync(loginPW, this.password);
  }
}

// Initialize the User model with specific attributes and their data types
User.init(
  {
    // Unique identifier for the user
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // User's username, must not be null and must be unique
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // User's password, must not be null and must have a minimum length of 8 characters
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    // Hooks to hash the password before creating or updating a user
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    // Sequelize instance for database connection
    sequelize,
    // Model name in singular form
    modelName: 'user',
    // Freeze the table name to be the same as the model name
    freezeTableName: true,
    // Use underscored naming for the database table (e.g., user_table)
    underscored: true,
    // Disable timestamps for createdAt and updatedAt columns
    timestamps: false,
  }
);

// Export the User model for use in other parts of the application
module.exports = User;