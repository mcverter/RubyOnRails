var mongoose = require('mongoose'),
    taskSchema = new mongoose.Schema({
        taskName: {
            type: String,
            required: true,
            validate:validateLength
        },
        taskDesc: String,
        createdOn: {type: Date, default: Date.now},
        createdBy: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
        modifiedOn: Date,
        assignedTo: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
    }),

    projectSchema = new mongoose.Schema({
        projectName: String,
        createdOn: {
            type: Date,
            default: Date.now
        },
        modifiedOn:{
            type: Date,
            default: Date.now
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        tasks: [taskSchema]

    });

projectSchema.statics.findByUserID = function(userid, callback) {
    this.find(
        {createdBy: userid},
        ' id projectName',
        {sort: 'modifiedOn'},
        callback);

};

exports.byUser = function (req, res) {
    console.log('Getting user projects');
    if (req.params.userid) {
        Project.findByUserID (
            req.params.userid,
                function(err, projects) {
                    if (!err) {
                        console.log(projects);
                        res.json(projects)
                    }  else {
                        console.log(err);
                        res.json({"status" : "error", "error" : "error finding projects"});
                    }
        });
    } else {
        console.log('No user id supplied');
        res.json({"status" : "error", "error" : "No user id supplied"});
    }
};

exports.displayInfo = function(req, res) {
    console.log('finding project _id: ' + req.params.id);
    if (req.session.loggedin !== 'true') {
    }y
}


exports.addTask = function (req, res) {
    Projects.findById(req.body.projectID, 'tasks modifiedOn',
        function(err, project) {
            if (!err) {
                project.tasks.push({
                    taskName: req.body.taskName,
                    taskDec: req.body.taskDesc,
                    createdBy: req.session.user._id
                });
                project.modifiedOn = Date.now();
                project.save(function (err, project) {
                    if (err) {
                        console.log('Oh dear', err);
                    } else {
                        console.log('task saved' + req.body.taskName);
                        res.redirect('/project/' + req.body.projectID);
                    }

                });
            }
        });
};