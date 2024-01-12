// Importing the User model from the models directory
const { User } = require('../models');

// Sample data for seeding users
const userData = [
    {
        username: 'jabrams',
        password: '6.2LV8'
    },
    {
        username: 'AZCnyc',
        password: 'globetrotter'
    },
    {
        username: 'SnoopDog',
        password: 'sniffwoof'
    },
    {
        username: 'PeachPanther',
        password: 'friendlywhiskers'
    }
];

// Function to seed users into the database
const seedUsers = async () => {
    try {
        // Using Sequelize's bulkCreate to insert multiple users at once
        await User.bulkCreate(userData);
        console.log('Users seeded successfully');
    } catch (error) {
        // Handling errors that may occur during the seeding process
        console.error('Error seeding users:', error);
    }
};

// Export the seedUsers function for use in other parts of the application
module.exports = seedUsers;