$(document).ready(function () {


    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar
    $currentDay = $('<h1>');
    $currentDay.text(moment().format('MMMM Do YYYY'))
    $('#currentDay').append($currentDay)

    // WHEN I scroll down
    // THEN I am presented with timeblocks for standard business hours
    // WHEN I view the timeblocks for that day
    // THEN each timeblock is color coded to indicate whether it is in the past, present, or future

    let startingHour = 9
    let endingHour = 17

    // Funciton that takes in a starting hour and an ending hour and renders the contents of the page
    function renderRows(sHour,eHour){
        $('.container').html('')
        for (let hour = sHour; hour <= eHour; hour++) {
            // add the rows
            $hourRow = $('<div>')
            $hourRow.addClass('row')
            $('.container').append($hourRow)

            // add the hour block on the left hand side to the row div
            $hour = $('<p>')
            $hour.text(`${hour}:00`)
            $hourRow.append($hour)
            $hour.addClass('hour')

            // add the text area block next to the hour block
            $textArea = $('<textarea>')
            $hourRow.append($textArea)
            $textArea.attr('id', `text-${hour}`)
            // call function to color hours
            checkHourColor(hour)

            // add the save button block next to the text area block and the icons
            $saveBtn = $('<div>')
            $hourRow.append($saveBtn)
            $saveBtn.addClass('saveBtn')
            $saveBtn.attr('id', `save-${hour}`)
            $saveBtn.html(`<i class="far fa-save fa-2x"></i>`)
        }
    }

    // function that takes in hour from our for loop and compares it to the moment hour. Colors the row accordingly.
    function checkHourColor(theHour) {
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

    // on clicking the save button, save the text in text area to the page and local storage. 
    $('.saveBtn').on('click', function (event) {
        // get the number row we are in
        let textNum = event.target.id.substr(5);
        console.log(textNum)
        console.log('run')
        console.log($this)
        //  Then look into the textarea using that hour we've determined and pull the data out of the textarea and into a variable. THis is failing.
        addedText = $(`#text-${textNum}`).textContent
        console.log(addedText)

        // Finally, save the text to localstorage with the  hour of the day as the key and the text as the value.
    })

    // on submiting what you want the start and ending times to be, re-render the rows
    $('#hourSubmit').on('click', function(event){
        event.preventDefault();
        startingHour = $('#startHour').val()
        endingHour = $('#endingHour').val()
        renderRows(startingHour,endingHour);
    })

    renderRows(startingHour,endingHour);

})