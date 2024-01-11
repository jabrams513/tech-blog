const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Comment 1 comment 1",
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: "Comment 2 comment 2",
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: "Comment 3 comment 3",
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: "Comment 4 comment 4",
        user_id: 4,
        post_id: 1
    }
];

const seedComments = async () => {
    try {
        await Comment.bulkCreate(commentData);
        console.log('Comments seeded successfully');
    } catch (error) {
        console.error('Error seeding comments:', error);
    }
};

module.exports = seedComments;