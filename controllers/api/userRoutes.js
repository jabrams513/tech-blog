const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// Route to get all users (excluding passwords)
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to get a specific user by ID (excluding password) and include associated posts and comments
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findOne({
      attributes: { exclude: ["password"] },
      where: { id: req.params.id },
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'content', 'created_date']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'created_date'],
          include: {
            model: Post,
            attributes: ['title']
          }
        },
        {
          model: Post,
          attributes: ['title'],
        }
      ]
    });

    // Handle case where no user is found with the specified id
    if (!userData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }

    res.json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to create a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    // Save user session information upon successful user creation
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json(userData);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to handle user login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    // Handle case where no user is found with the specified username
    if (!userData) {
      res.status(400).json({ message: "No user with that username!" });
      return;
    }

    // Check if the provided password is valid
    const validPassword = userData.checkPassword(req.body.password);

    // Handle case where the provided password is incorrect
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    // Save user session information upon successful login
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to handle user logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    // Destroy the session upon logout
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    // Return a 404 status if no session is found
    res.status(404).end();
  }
});

// Export the configured router for use in other parts of the application
module.exports = router;