const Task = require('../models/task');
// delete task from database when delete button is clicked
module.exports.deleteTask = function (req, res) {
    // console.log("test1", req.body);
    // if no task is selected by user
    if (req.body.id == undefined) {
        return res.redirect('back');
    }
    // if only one task is selected by user
    else if (typeof (req.body.id) == 'string') {
        Task.findByIdAndDelete(req.body.id, function (err) {
            if (err) {
                console.log(`Error!: ${err} Cannot delete the task!`)
                return;
            }
            return res.redirect('back');
        });
    }
    // if multiple tasks are selected
    else {
        for (let i of req.body.id) {
            // console.log("Test2",i);
            Task.findByIdAndDelete(i, function (err) {
                if (err) {
                    console.log(`Error!: ${err} Cannot delete the task!`)
                    return;
                }
            });
        }
        return res.redirect('back');
    }
};

