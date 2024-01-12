const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to create a new project (requires authentication)
router.post('/', withAuth, async (req, res) => {
  try {
    // Create a new project with user_id from the session
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    // Respond with the newly created project
    res.status(200).json(newProject);
  } catch (err) {
    // Respond with a 400 status and the error if something goes wrong
    res.status(400).json(err);
  }
});

// Route to delete a project by ID (requires authentication and ownership)
router.delete('/:id', withAuth, async (req, res) => {
  try {
    // Destroy the project with the specified ID and user_id from the session
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    // Handle case where no project is found with the specified id and user_id
    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    // Respond with a 200 status and the deleted project data
    res.status(200).json(projectData);
  } catch (err) {
    // Respond with a 500 status and the error if something goes wrong
    res.status(500).json(err);
  }
});

// Export the configured router for use in other parts of the application
module.exports = router;