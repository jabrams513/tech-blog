# Tech Blog
A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## Purpose
Build an CMS-style blog site similar to WordPress that adheres to the MVC paradigm. Handlebars.js will be used for templating, Sequelize for ORM, and express-session npm package for authentication. The goal is to enable developers to publish blog posts and comment on each other's posts. The site will be deployed on Render. 

## Deployed Webpage Link
https://techno-blog-febc3bdd0c0b.herokuapp.com/

## User Story

AS A developer who writes about tech

I WANT a CMS-style blog site

SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria

GIVEN a CMS-style blog site

WHEN I visit the site for the first time

THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option

THEN I am taken to the homepage

WHEN I click on any other links in the navigation

THEN I am prompted to either sign up or sign in

WHEN I choose to sign up

THEN I am prompted to create a username and password

WHEN I click on the sign-up button

THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in

THEN I am prompted to enter my username and password

WHEN I am signed in to the site

THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation

THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post

THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in

THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation

THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post

THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post

THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard

THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation

THEN I am signed out of the site

WHEN I am idle on the site for more than a set time

THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

## Usage & Installation
The website is free to use at this link: https://techno-blog-febc3bdd0c0b.herokuapp.com/

For local use follow these instructions for installation:
- Clone the tech-blog repository
- Make sure you have node.js
- Run the following command to install necessary dependencies:
>    `npm i`

## Screenshot
Please refer to the following screenshot(s) as a reference for the application's appearance and functionality:


Homepage<br/>
![Homepage](./public/images/Homepage.png) <br/>

Add Post<br/>
![Add Post](./public/images/AddPost.png) <br/>

Dashboard<br/>
![Dashboard](./public/images/Dashboard.png) <br/>

Comment<br/>
![Comment](./public/images/Comment.png) <br/>

Edit Post<br/>
![Edit Post](./public/images/EditPost.png) <br/>

Login<br/>
![Login](./public/images/Login.png) <br/>

Sign Up<br/>
![Sign Up](./public/images/SignUp.png) <br/>

## Code Sources and Collaborators
I had the opportunity to collaborate with my peers Kenny, Mustapha, and Phil. We checked our work with one another.

In addition, I received feedback from my instructor, Diego, my TA, Andrew, my tutor, Corey, askBCS, as well as some help with commenting and seeding using AI tools.

All code used was self-generated or otherwise gathered from class materials.