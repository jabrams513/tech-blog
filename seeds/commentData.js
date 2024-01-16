const { Comment } = require('../models');

// Sample data for seeding comments
const commentData = [
    {
        comment_text: "Inspiring post! The advancements in renewable energy are uplifting. How can individuals contribute to the green tech movement in their daily lives? Let's all play a part in creating a sustainable future!",
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: "Blockchain's impact on supply chain transparency is impressive! How do you see blockchain addressing challenges in industries that traditionally rely on centralized systems? Exciting times ahead for decentralized solutions!",
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: "I'm eagerly awaiting the widespread rollout of 5G! The possibilities for IoT applications in smart cities sound amazing. What steps do you think need to be taken to address the security concerns associated with the increased connectivity?",
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: "Fascinating read! The potential of AI in healthcare is truly groundbreaking. Do you think there will be challenges in balancing the efficiency gains with ethical considerations? Excited to see how AI continues to shape the future!",
        user_id: 4,
        post_id: 1
    }
];

// Function to seed comments into the database
const seedComments = async () => {
    try {
        // Using Sequelize's bulkCreate to insert multiple comments at once
        await Comment.bulkCreate(commentData);
        console.log('Comments seeded successfully');
    } catch (error) {
        // Handling errors that may occur during the seeding process
        console.error('Error seeding comments:', error);
    }
};

module.exports = seedComments;