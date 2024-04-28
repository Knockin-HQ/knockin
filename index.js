import Calendar from './calendar.js';

function myFunction() {
    const events = [
        { id: 0, eventName: 'Event 0', dateFrom: 1714259724000, dateTo: 1714277724000 },
    ]
    const calendar = new Calendar(events);
   
    for (let i = 0; i < events.length; i++) {
        var event = events[i];

    const calendarBody = document.getElementById('calendar-body');
    const calendarRows = document.getElementsByClassName('calendar-body-row');

    calendarBody.addEventListener('click', function (e) {
        e.preventDefault();
        const cell = e.currentTarget;

        const col = $(e.target).closest(".calendar-body-column").attr('data-day');
        const row = $(e.target).closest(".calendar-body-row").attr('id').replace(/^\D+/g, '');
        console.log(row, col);


        //console.log($(e.target)[0].getAttribute('data-day').value);
        //console.log($(e.target)[0].getAttribute('id'));


        //for (let i = 0; i < calendarRows.length; i++) {
        //    const calendarRow = calendarRows[i];
        //    const hourDiv = calendarRow.querySelector('.calendar-timeline-column');
        //    const hour = `${(parseInt(calendarRow.dataset.hour)) % 24}`.padStart(2, '0') + ':00';
        //    if (calendarRow === cell ) {
        //        console.log("????yay???")
        //    }
    });

}

myFunction();
