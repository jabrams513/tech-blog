const { User } = require('../models');

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

const seedUsers = async () => {
    try {
        await User.bulkCreate(userData);
        console.log('Users seeded successfully');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
};

module.exports = seedUsers;