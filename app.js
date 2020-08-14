$(document).ready(function () {
    // displays current date at top
    $currentDay = $('<h1>');
    $currentDay.text(moment().format('MMMM Do YYYY'))
    $('#currentDay').append($currentDay)

   // variables for default work day
    let startingHour = 9
    let endingHour = 17

    // Funciton that takes in a starting hour and an ending hour and renders the contents of the page
    function renderRows(sHour,eHour){
        //clear page
        $('.container').html('')
        // loop through hours entered. 9-5 to start
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
            // pull text content from local storage if it exists
            $textArea.text(localStorage.getItem(hour))

            // add the save button block next to the text area block and the icons
            $saveBtn = $('<div>')
            $hourRow.append($saveBtn)
            $saveBtn.addClass('saveBtn')
            $saveBtn.attr('id', `save-${hour}`)
            $saveBtn.html(`<i class='far fa-save fa-2x' id='save-${hour}'></i>`)
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

    // on clicking the save button, save the text in text area to the page and local storage. 
    $(document).on("click", ".saveBtn, .fa-save", function(event) {
        // get the number row we are in
        let textNum = event.target.id.substr(5);
        // set the value to local storage where the key is the row# we are working in and the value is the text that we're storing in text-area
        localStorage.setItem(textNum, $(`#text-${textNum}`).val());
    })

    // on submiting what you want the start and ending times to be, re-render the rows
    $('#hourSubmit').on('click', function(event){
        event.preventDefault();
        startingHour = $('#startHour').val()
        endingHour = $('#endingHour').val()
        renderRows(startingHour,endingHour);
    })

    // calls the renderRows function a first time.
    renderRows(startingHour,endingHour);
})