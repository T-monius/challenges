import assert from 'assert';
import { Meetup } from '../index.js';

describe('Test Meetup class', () => {
  describe('Test #day instance method', () => {
    it("Identifies the 'teenth' Monday in May 2013", () => {
      const numericCalendarMonth = 5;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const meetup = new Meetup(numericCalendarMonth, 2013);
      const date = meetup.day('monday', 'teenth');
      const desiredDate = 13;

      assert.equal(
        new Date(2013, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'teenth' Monday in August 2013", () => {
      const numericCalendarMonth = 8;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const meetup = new Meetup(numericCalendarMonth, 2013);
      const date = meetup.day('monday', 'teenth');
      const desiredDate = 19;

      assert.equal(
        new Date(2013, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'teenth' Monday in Septempter 2013", () => {
      const numericCalendarMonth = 9;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const meetup = new Meetup(numericCalendarMonth, 2013);
      const date = meetup.day('monday', 'teenth');
      const desiredDate = 16;

      assert.equal(
        new Date(2013, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'teenth' Tuesday in March 2013", () => {
      const numericCalendarMonth = 3;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const year = 2013;
      const meetup = new Meetup(numericCalendarMonth, year);
      const date = meetup.day('tuesday', 'teenth');
      const desiredDate = 19;

      assert.equal(
        new Date(year, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'teenth' Wednesday in February 2013", () => {
      const numericCalendarMonth = 2;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const year = 2013;
      const meetup = new Meetup(numericCalendarMonth, year);
      const date = meetup.day('wednesday', 'teenth');
      const desiredDate = 13;

      assert.equal(
        new Date(year, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'teenth' Thursday in June 2013", () => {
      const numericCalendarMonth = 6;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const year = 2013;
      const meetup = new Meetup(numericCalendarMonth, year);
      const date = meetup.day('thursday', 'teenth');
      const desiredDate = 13;

      assert.equal(
        new Date(year, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'teenth' Friday in April 2013", () => {
      const numericCalendarMonth = 4;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const year = 2013;
      const meetup = new Meetup(numericCalendarMonth, year);
      const date = meetup.day('friday', 'teenth');
      const desiredDate = 19;

      assert.equal(
        new Date(year, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'teenth' Saturday in October 2013", () => {
      const numericCalendarMonth = 10;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const year = 2013;
      const meetup = new Meetup(numericCalendarMonth, year);
      const date = meetup.day('saturday', 'teenth');
      const desiredDate = 19;

      assert.equal(
        new Date(year, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'teenth' Sunday in October 2013", () => {
      const numericCalendarMonth = 6;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const year = 2013;
      const meetup = new Meetup(numericCalendarMonth, year);
      const date = meetup.day('sunday', 'teenth');
      const desiredDate = 16;

      assert.equal(
        new Date(year, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'first' Monday in March 2013", () => {
      const numericCalendarMonth = 3;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const year = 2013;
      const meetup = new Meetup(numericCalendarMonth, year);
      const date = meetup.day('monday', 'first');
      const desiredDate = 4;

      assert.equal(
        new Date(year, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'second' Monday in March 2013", () => {
      const numericCalendarMonth = 3;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const year = 2013;
      const meetup = new Meetup(numericCalendarMonth, year);
      const date = meetup.day('monday', 'second');
      const desiredDate = 11;

      assert.equal(
        new Date(year, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'third' Monday in March 2013", () => {
      const numericCalendarMonth = 3;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const year = 2013;
      const meetup = new Meetup(numericCalendarMonth, year);
      const date = meetup.day('monday', 'third');
      const desiredDate = 18;

      assert.equal(
        new Date(year, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'fourth' Monday in March 2013", () => {
      const numericCalendarMonth = 3;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const year = 2013;
      const meetup = new Meetup(numericCalendarMonth, year);
      const date = meetup.day('monday', 'fourth');
      const desiredDate = 25;

      assert.equal(
        new Date(year, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
    it("Identifies the 'last' Monday in March 2013", () => {
      const numericCalendarMonth = 3;
      const zeroIndexedMonth = numericCalendarMonth - 1;
      const year = 2013;
      const meetup = new Meetup(numericCalendarMonth, year);
      const date = meetup.day('monday', 'last');
      const desiredDate = 25;

      assert.equal(
        new Date(year, zeroIndexedMonth, desiredDate).toDateString(),
        date.toDateString()
      );
    });
  });
  describe('Test ::getDayFromWeekday static function', () => {
    it('Associates monday with the number 1', () => {
      const desiredDate = 1;
      const weekday = 'monday';
      const numericDate = Meetup.getNumericDayFromWeekday(weekday);

      assert.equal(numericDate, desiredDate);
    });
  });
});
