const router = require('express').Router();

const { Intro, About, Project, Course, Experience, Contact } = require('../models/portfolioModel');
// Get all portfolio data //
router.get('/get-portfolio-data', async (req, res) => {
    try {

        const intros = await Intro.find();
        const about = await About.find();
        const project = await Project.find();
        const experience = await Experience.find();
        const course = await Course.find();
        const contact = await Contact.find();

        res.status(200).send(
            {
                intro: intros[0],
                about: about[0],
                experiences: experience,
                projects: project,
                courses: course,
                contact: contact[0]
            }
        );

    } catch (error) {
        res.status(500).send(error);

    }
});


//update intro

router.post("/update-intro", async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({

            data: intro,
            success: true,
            message: "Intro updated succesfully",
        }
        );
    }
    catch (error) {
        res.status(500).send(error);
    }
});

router.post("/update-about", async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({

            data: about,
            success: true,
            message: "About updated succesfully",
        }
        );
    }
    catch (error) {
        res.status(500).send(error);
    }
});

//Add experience

router.post("/add-experience", async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            status: true,
            message: "Experience added succesfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }

});
// update Experience
router.post("/update-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({

            data: experience,
            success: true,
            message: "Experince updated succesfully",
        }
        );
    }
    catch (error) {
        res.status(500).send(error);
    }
});



//Delete experience

router.post("/delete-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({

            data: experience,
            success: true,
            message: "Experince deleted succesfully",
        }
        );
    } catch (error) {
        res.status(500).send(error);
    }


});


//Add Project

router.post("/add-project", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            status: true,
            message: "Project added succesfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }

});
// update Project
router.post("/update-project", async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({

            data: project,
            success: true,
            message: "Project updated succesfully",
        }
        );
    }
    catch (error) {
        res.status(500).send(error);
    }
});



//Delete project

router.post("/delete-project", async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({

            data: project,
            success: true,
            message: "project deleted succesfully",
        }
        );
    } catch (error) {
        res.status(500).send(error);
    }


});


//Add Project

router.post("/add-course", async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(200).send({
            data: course,
            status: true,
            message: "course added succesfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }

});
// update Project
router.post("/update-course", async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({

            data: course,
            success: true,
            message: "course updated succesfully",
        }
        );
    }
    catch (error) {
        res.status(500).send(error);
    }
});



//Delete project

router.post("/delete-course", async (req, res) => {
    try {
        const course = await Course.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({

            data: course,
            success: true,
            message: "course deleted succesfully",
        }
        );
    } catch (error) {
        res.status(500).send(error);
    }


});

//update Contact

router.post("/update-contact", async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({

            data: contact,
            success: true,
            message: "Contact updated succesfully",
        }
        );
    }
    catch (error) {
        res.status(500).send(error);
    }
});



module.exports = router;