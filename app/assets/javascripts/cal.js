var init_cal;
init_cal=function(){
  $('.calendar').each(function(){
      var calendar=$(this);
      calendar.fullCalendar({
        header: {
                left: false,
                center: 'title',
                right: 'agendaWeek'
        },
        height: 604,
        defaultView: 'agendaWeek',
        selectable: {
            agenda: true
        },
        selectHelper: true,
        editable: false,
        allDaySlot: false,
        events: '/reservations.json',

        minTime: "9:00:00",
        maxTime: "22:00:00",
        slotDuration: "1:00:00",

        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        titleFormat: 'MMMM D'
    });
  });
};
$(document).on('turbolinks:load', init_cal);
