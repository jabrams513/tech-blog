const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Define associations between User and Post models
User.hasMany(Post, {
  foreignKey: 'user_id'  // Each user can have multiple posts with the specified foreign key
});

Post.belongsTo(User, {
  foreignKey: 'user_id',  // A post belongs to a user with the specified foreign key
  onDelete: "cascade"  // Cascade delete posts associated with a user when the user is deleted
});

// Define associations between User and Comment models
User.hasMany(Comment, {
  foreignKey: 'user_id',  // Each user can have multiple comments with the specified foreign key
  onDelete: "cascade"  // Cascade delete comments associated with a user when the user is deleted
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',  // A comment belongs to a user with the specified foreign key
  onDelete: "cascade"  // Cascade delete comments associated with a user when the user is deleted
});

// Define associations between Post and Comment models
Post.hasMany(Comment, {
  foreignKey: 'post_id',  // Each post can have multiple comments with the specified foreign key
  onDelete: "cascade"  // Cascade delete comments associated with a post when the post is deleted
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',  // A comment belongs to a post with the specified foreign key
  onDelete: "cascade"  // Cascade delete comments associated with a post when the post is deleted
});

// Export User, Post, and Comment models with their associations
module.exports = { User, Post, Comment };