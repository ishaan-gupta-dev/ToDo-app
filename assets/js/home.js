// function to set value of checkbox as true if checked else false 
function isChecked() {
    if (document.getElementById("is_important").checked) {
        document.getElementById("is_important").setAttribute('value', "true");
    }
    else {
        document.getElementById("is_important").setAttribute('value', 0);
    }
}

var tasks = document.getElementsByClassName('task-card-container');

for (let i of tasks) {

    // show the select all checkbox when task length is greater than 1
    if(tasks.length > 1){
    document.getElementById('select-all-checkbox-container').style.visibility = "visible";
    }

    // select all checkbox of tasks when select all checkbox is checked
    let selectAllCheckbox = document.getElementById('select-all-checkbox')
    selectAllCheckbox.addEventListener('change',function(){
        if(selectAllCheckbox.checked){
            i.getElementsByTagName('input')[0].checked = true;
        }
        else{
            i.getElementsByTagName('input')[0].checked = false;
        }
    })
    // To apply line-through style to text when checkbox is clicked
    i.getElementsByTagName('input')[0].addEventListener('change', function () {
        if (this.checked) {
            i.getElementsByTagName('p')[0].style.textDecoration = 'line-through';
            i.getElementsByTagName('span')[0].style.textDecoration = 'line-through';
            i.getElementsByTagName('p')[1].style.textDecoration = 'line-through';
        } else {
            i.getElementsByTagName('p')[0].style.textDecoration = 'none';
            i.getElementsByTagName('span')[0].style.textDecoration = 'none';
            i.getElementsByTagName('p')[1].style.textDecoration = 'none';
        }
    });

    // Show alert dialog with information when button is clicked
    i.getElementsByTagName('button')[0].addEventListener('click', function () {
        let res, x;
        if (i.getElementsByTagName('p')[1].innerText == "Important!") {
            x = "Yes";
        }
        else {
            x = "No";
        }
        res = "Task : " + i.getElementsByTagName('p')[0].innerText + "\n" +
            "Deadline : " + i.getElementsByTagName('span')[0].innerText + "\n" +
            "Category : " + this.innerText + "\n" +
            //   "Is Important : " + i.getElementsByTagName('p')[1].innerText;
            "Is Important : " + x;
        window.alert(res);
    });
}