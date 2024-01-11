const { Post } = require("../models");

const postData = [
    {
        title: "Post 1",
        content: "Post 1 Content post 1 content",
        user_id: 1,
    },
    {
        title: "Post 2",
        content: "Post 2 Content post 2 content",
        user_id: 2,
    },
    {
        title: "Post 3",
        content: "Post 3 Content post 3 content",
        user_id: 3,
    },
    {
        title: "Post 4",
        content: "Post 4 Content post 4 content",
        user_id: 4,
    }
];

const seedPosts = async () => {
    try {
        await Post.bulkCreate(postData);
        console.log('Posts seeded successfully');
    } catch (error) {
        console.error('Error seeding posts:', error);
    }
};

module.exports = seedPosts;