import AirDatepicker from 'air-datepicker';
const CALENDAR_STATIC = document.querySelectorAll('.calendar-static');

if (CALENDAR_STATIC) {
    CALENDAR_STATIC.forEach(elem => {
        new AirDatepicker(elem);
    })
}