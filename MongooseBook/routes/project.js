var mongoose = require('mongoose'),
Project = mongoose.model('Project');

exports.displayInfo = function(req, res) {
    console.log('Finding project _id:' + req.params.id);
    if (req.session.loggedin !== "true") {
	res.redirect('/login');
    } else {
	if (req.params.id) {
	    Project.findById(req.params.id, function(err, project) {
		if (err) {
		    console.log(err);
		    res.redirect('/user?404=project');
		} else {
		    console.log(project);
		    title: project.projectName,
		    projectName: project.projectName,
		    tasks: project.tasks,
		    createdBy: project.createdBy,   // populate('createdBy').exec(fucntion(errr, project){})
		                                    // populate('createdBy', 'name email')x
		    projectId: req.params.id
		} else {
		    res.redirect('/user');
		}
	    }
	}
    }
    
}