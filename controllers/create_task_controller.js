const Task = require('../models/task');

// create task controller - push into db when add task button is clicked
module.exports.createTask = function (req, res) {
    let newDate;
    // if no date is selected
    if(req.body.due_date.length == 0){
        newDate = 'No Deadline'
    }
    // If due_date is selected, this will convert the date to required format
    else{
        let temp = req.body.due_date;
        let date = temp.substring(8, 10);
        let mon = temp.substring(5, 7);
        let year = temp.substring(0, 4);

        if(date[0] == '0'){
            date = date.substring(1);
        }
        if(mon[0] == '0'){
            mon = mon.substring(1);
        }

        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        newDate = "" + months[mon-1] + " " + date + ", " + year;
    }

    // checking if is_important is checked or not
    let new_is_important;
    if (req.body.is_important == undefined){
        new_is_important = false;
    }
    else{
        new_is_important = true;
    }
    // To create new task and store in database
    Task.create({
        description: req.body.description,
        category: req.body.category,
        due_date: newDate,
        is_important: new_is_important
    }, function (err, newTask) {
        if (err) {
            console.log(`Error: ${err}! \nCannot create a new task`);
            return;
        }
        return res.redirect('back');
    });

}