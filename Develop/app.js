$(document).ready(function(){


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
$currentDay = $('<h1>');
$currentDay.text(moment().format('MMMM Do YYYY'))
$('#currentDay').append($currentDay)

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// alert('') what are your starting hours?

//adds rows and hours in the day
for(let hour=0; hour<=24;hour++){
    // add the rows
    $hourRow = $('<div>')
    $hourRow.addClass('row')
    $('.container').append($hourRow)  
    
    // add the hour block
    $hour = $('<p>')
    $hour.text(`${hour}:00`)
    $hourRow.append($hour)    
    $hour.addClass('hour')

    // add the text area block
    $textArea = $('<textarea>')
    $hourRow.append($textArea) 
    // call function to color hours
    checkHourColor(hour)

    // add the save button block
    $saveBtn = $('<div>')
    $hourRow.append($saveBtn) 
    $saveBtn.addClass('saveBtn')       
}

// function to color the text areas based on time
function checkHourColor(theHour){
        if (moment().hour() > theHour) {
            $textArea.addClass('past')
        } else if (moment().hour() < theHour) {
            $textArea.addClass('future')
        } else {
            $textArea.addClass('present')
        }
    };


// WHEN I click into a timeblock
// THEN I can enter an event
// solved by text area tag

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

$('.saveBtn').on('click', function(){
    $textArea.text('text added')
    // window.localStorage.setItem
    console.log('saved')
    // window.localStorage.setItem('name', 'Obaseki Nosa');



})

// -------

// function init() {
//     // check if there are todos in localStorage
//     if (localStorage.getItem("todos")) {
//         const savedTodos = JSON.parse(localStorage.getItem("todos"))
//         todos.push(...savedTodos);
//     }
//     // Render todos to the DOM
//     renderTodos();
// };

// function storeTodos() {
//     // Add code here to stringify the todos array and save it to the "todos" key in localStorage
//     localStorage.setItem('todos', JSON.stringify(todos));
// };

// // When form is submitted...
// $todoForm.on("submit", function (event) {
//     event.preventDefault();
//     // var todoText = $todoInput.value.trim();
//     const todoText = $todoInput.val().trim() + ': ' + finalScore;
//     // Return from function early if submitted todoText is blank
//     if (todoText === "") {
//         return;
//     }
//     // Add new todoText to todos array, clear the input
//     todos.push(todoText);
//     $todoInput.val('');
//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
// });





})