import Calendar from './calendar.js';

function getRandomBgColorAndTextColor() {
    const bgColors = [
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4',
        '#009688',
        '#4caf50',
        '#8bc34a',
        '#cddc39',
        '#ffeb3b',
        '#ffc107',
        '#ff9800',
        '#ff5722',
        '#795548',
        '#607d8b'
    ];
    const textColors = [
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff'
    ];
    return {
        bgColor: bgColors[Math.floor(Math.random() * bgColors.length)],
        textColor: textColors[Math.floor(Math.random() * textColors.length)]
    }
}

function myFunction() {
    var events = [
        { id: 0, eventName: 'Event 0', dateFrom: 1000000000000, dateTo: 1000000000000 },
    ]
    var calendar = new Calendar(events);
   
    const calendarBody = document.getElementById('calendar-body');
    const calendarRows = document.getElementsByClassName('calendar-body-row');

    calendarBody.addEventListener('dblclick', function (e) {
        e.preventDefault();
        const cell = e.currentTarget;

        const col = $(e.target).closest(".calendar-body-column").attr('data-day');
        const row = $(e.target).closest(".calendar-body-row").attr('id').replace(/^\D+/g, '');

        const strlength = calendar.getDate().toString().length;

        var dayNum = parseInt(calendar.getDate().toString().substring(8, 11));
        var dateStr1 = calendar.getDate().toString().substring(0, 8);
        var dateStr2 = calendar.getDate().toString().substring(10, 16);
        var dateStr3 = ":00:00 " + calendar.getDate().toString().substring(25, strlength);
        var rowStr = row.toString();
        /*var rowStr2 = (parseInt(row) + 1).toString();*/

        var startStr = "";
        //var endStr = "";

        if (col != 0) { dayNum = dayNum - 7 + parseInt(col); }
        if (parseInt(row) < 10) {
            rowStr = "0" + (parseInt(row)).toString();
        }
        //if ((parseInt(row) + 1) < 10) {
        //    rowStr2 = "0" + (parseInt(row) + 1).toString();
        //}

        startStr += dateStr1 + dayNum + " " + dateStr2 + rowStr + dateStr3;
        //endStr += dateStr1 + dayNum + " " + dateStr2 + rowStr2 + dateStr3;

        //console.log("START", startStr);
        //console.log("END", endStr);

        const startDate = new Date(startStr).getTime();
        const endDate = new Date(startStr).getTime();

        //for (let i = 0; i < calendarRows.length; i++) {
        //    const calendarRow = calendarRows[i];
        //    const hourDiv = calendarRow.querySelector('.calendar-timeline-column');
        //    const hour = `${(parseInt(calendarRow.dataset.hour)) % 24}`.padStart(2, '0') + ':00';
        //    if (calendarRow === cell ) {
        //        console.log("????yay???")
        //    }
        events.push({
            id: events[events.length - 1]["id"] + 1,
            eventName: "New Event",
            dateFrom: startDate,
            dateTo: endDate,
            bgColor: getRandomBgColorAndTextColor().bgColor,
            textColor: getRandomBgColorAndTextColor().textColor,
            row: row,
            col: col,
        })

        calendar._renderEvent(events[events.length - 1]);
    });
}
myFunction();
