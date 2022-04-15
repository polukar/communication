import Calendar from '@event-calendar/core';
import TimeGrid from '@event-calendar/time-grid';


const WEEK = document.getElementById('week');
const DAY = document.getElementById('day');


let calendarHtml = '<div class="month-list__item month-list__item-full"><div class="month-list__head"><div class="month-list__time ec-event-time">8:00 - 8:45</div><div class="month-list__cabinet">Звонок в ZOO</div></div><div class="month-list__description">Название команды, длинное название события очень длинное назваиние длинное назваиние</div><div class="participants"><div class="participant participant--orange">IR</div><div class="participant participant--blue">ON</div><div class="participant participant--purple">MA</div><div class="participant participant--yellow">N</div><div class="participant participant--green">GO</div></div></div>'

if (WEEK) {
    let ecWeek = new Calendar({
        target: WEEK,
        props: {
            plugins: [TimeGrid],
            options: {
                view: 'timeGridWeek',
                events: [{
                    "title": `${calendarHtml}`,
                    "start": "2022-04-15 1:00",
                    "end": "2022-04-15 5:00"
                }],
                eventColor: '#222222',
                eventTextColor: "#222222",
                eventBackgroundColor: "#fff",


            },
        },
    });
}

if (DAY) {

    let ecDay = new Calendar({
        target: DAY,
        props: {
            plugins: [TimeGrid],
            options: {
                view: 'timeGridDay',
                events: [{
                    "title": `${calendarHtml}`,
                    "start": "2022-04-15 1:00",
                    "end": "2022-04-15 5:00"
                }],
                eventColor: '#222222',
                eventTextColor: "#222222",
                eventBackgroundColor: "#fff",
            }
        }
    });
}