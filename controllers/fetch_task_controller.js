const Task = require("../models/task")

// Different colors for different categories
let colorArray = {
    personal : 'darkgreen',
    work : 'darkmagenta',
    study : 'darkorange',
    shopping : 'darkblue',
    cleaning : 'darkcyan',
    other : 'chartreuse',
    'n/a' : 'grey',
}

// fetch tasks from database and render 'home'
module.exports.fetchTask = function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log(`Error! ${err} Cannot fetch tasks from Database!`);
            return;
        }
        return res.render('home',{
            title: 'Home',
            taskArray: tasks,
            color_list: colorArray
        });
    });
}