class Meetup {
  constructor(month, year) {
    this.month = month;
    this.year = year;
  }

  /*
    weekday: string representing a day of the week
    ithWeek: number representing weeks in a month
      (i.e. 'first', 'second', 'third', 'fourth',
      'last' or 'teenth')
  */
  day(weekday, ithWeek) {
    const targetDay = Meetup.getNumericDayFromWeekday(weekday);
    const offSetMonth = this.month - 1;
    const datesForWeekdayInMonth = Meetup.getDatesForWeekdayInMonth(
      this.year,
      offSetMonth,
      targetDay
    );
    const dateForMeetup = Meetup.getDateForMeetupFromDatesAndTargetWeek(
      datesForWeekdayInMonth,
      ithWeek
    );

    return new Date(this.year, offSetMonth, dateForMeetup);
  }

  static getDateForMeetupFromDatesAndTargetWeek(datesForWeekdayInMonth, ithWeek) {
    let dateForMeetup = 0;
    switch (ithWeek) {
      case 'teenth':
        const isSecondWeek = datesForWeekdayInMonth[1] > 12 && datesForWeekdayInMonth[1] < 20;
        dateForMeetup = isSecondWeek ? datesForWeekdayInMonth[1] : datesForWeekdayInMonth[2];
        break;
      case 'last':
        dateForMeetup = datesForWeekdayInMonth[datesForWeekdayInMonth.length - 1];
        break;
      default:
        const weekReferences = ['first', 'second', 'third', 'fourth'];
        const idx = weekReferences.findIndex((reference) => reference === ithWeek );
        dateForMeetup = datesForWeekdayInMonth[idx];
        break;
    }

    return dateForMeetup;
  }

  static getDatesForWeekdayInMonth(year, offSetMonth, targetDay) {
    let dayOfMonth = 1;
    const datesForWeekdayInMonth = [];
    const searchDate = new Date(year, offSetMonth, dayOfMonth);

    while(searchDate.getMonth() === offSetMonth) {
      const day = searchDate.getDay();
      if(day === targetDay) {
        datesForWeekdayInMonth.push(searchDate.getDate())
      }
      dayOfMonth += 1;
      searchDate.setDate(dayOfMonth);
    }

    return datesForWeekdayInMonth;
  }

  static getNumericDayFromWeekday(targetWeekday) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const idx = days.findIndex((weekday) => weekday === targetWeekday.toLowerCase() );

    return idx;
  }
};

export { Meetup };
