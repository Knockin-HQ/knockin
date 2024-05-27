import Calendar from './calendar.js';

function getRandomBgColorAndTextColor() {
    const bgColors = [
        '#2f2a29ff',
        '#2f2a29ff',
        '#2f2a29ff',
        '#2f2a29ff',
    ];
    const textColors = [
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
    ];
    return {
        bgColor: bgColors[Math.floor(Math.random() * bgColors.length)],
        textColor: textColors[Math.floor(Math.random() * textColors.length)]
    }
}

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

function createEvent(e, calendar, events) {
    e.preventDefault();
    const cell = e.currentTarget;

    const col = $(e.target).closest(".calendar-body-column").attr('data-day');
    const row = $(e.target).closest(".calendar-body-row").attr('id').replace(/^\D+/g, '');

    let monday = calendar._getMonday(calendar.getDate()); // day number is 1 (column number is 1)
    let selected = monday.addDays(parseInt(col)-1);
    selected.addHours(parseInt(row));
    //console.log("monday", monday);

    //write new code to create a new date string from a dayNum and time/ hour which is the number of days and hours relative to a given monday based on this format: Mon May 27 2024 00:00:00 GMT-0400 (Eastern Daylight Time)
    console.log(selected.toString());

    const rowStr = row.padStart(2, '0');

    events.push({
        id: events[events.length - 1].id + 1,
        eventName: "New Event",
        dateFrom: selected,
        dateTo: selected,
        bgColor: getRandomBgColorAndTextColor().bgColor,
        textColor: getRandomBgColorAndTextColor().textColor,
        row: row,
        col: col,
    });

    calendar._renderEvent(events[events.length - 1]);
}


function myFunction() {
    var events = [
        { id: 0, eventName: 'Event 0', dateFrom: 1000000000000, dateTo: 1000000000000 },
    ]
    var calendar = new Calendar(events);

    const calendarBody = document.getElementById('calendar-body');
    const calendarRows = document.getElementsByClassName('calendar-body-row');
    calendarBody.addEventListener('dblclick', function (e) { createEvent(e, calendar, events) })
}

//    var isMouseDown = false;
//    $(calendarBody)
//        .mousedown(function (e) {
//            if (e.detail === 2) {
//                isMouseDown = true;
//                const cell = e.currentTarget;

//            const col = $(e.target).closest(".calendar-body-column").attr('data-day');
//            const row = $(e.target).closest(".calendar-body-row").attr('id').replace(/^\D+/g, '');
//            console.log(row, col);
//                }
//            }
//    )
//        .mouseover(function (e) {
//            if (isMouseDown) {
//                //createEvent(e, calendar, events);
//            }
//        });

//    $(document)
//        .mouseup(function (e) {
//            isMouseDown = false;
//            const cell = e.currentTarget;

//            const col = $(e.target).closest(".calendar-body-column").attr('data-day');
//            const row = $(e.target).closest(".calendar-body-row").attr('id').replace(/^\D+/g, '');
//            console.log(row, col);

//        });
//}

myFunction();