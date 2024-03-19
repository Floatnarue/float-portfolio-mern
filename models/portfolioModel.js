const mongoose = require('mongoose');

const introSchema = new mongoose.Schema(
    {
        WelcomeText: {
            type: String,
            require: true
        },
        firstName: {
            type: String,
            require: true
        },
        lastName: {
            type: String,
            require: true
        },
        caption: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        }

    }
);

const aboutSchema = new mongoose.Schema(
    {
        lottieURL: {
            type: String,
            require: true
        },
        description1: {
            type: String,
            require: true
        },
        description2: {
            type: String,
            require: true
        },
        skills: {
            type: Array,
            require: true
        },
        frameworks: {
            type: Array,
            require: true
        }
    }
);


const experienceSchema = ({
    company: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    period: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },
});



const projectSchema = (
    {
        technologies: {
            type: Array,
            require: true
        },
        title: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        link: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },

    }
);

const courseSchema = (
    {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        Learningplatform: {
            type: String,
            require: true
        },
        source: {

            type: String,
            require: true

        },

    }
);

const contactSchema = (
    {
        image : {
            type : String,
            require : true
        },
        detail : {
            type : String,
            require : true
        },
        mobile : {
            type : String,
            require : true
        },
        email : {
            type : String,
            require : true
        },
    }
);


module.exports = {
    Intro : mongoose.model("intros",introSchema),
    About : mongoose.model("about",aboutSchema),
    Experience : mongoose.model("experience",experienceSchema),
    Project : mongoose.model("project",projectSchema),
    Course : mongoose.model("course",courseSchema),
    Contact : mongoose.model("contact",contactSchema),
};