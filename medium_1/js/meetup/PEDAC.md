# Meetup

## Problem

Define a class `Meetup` with a constructor taking a month and a year and a method  `day(weekday, schedule)` where weekday is one of 'monday', 'tuesday', etc and schedule is 'first', 'second', 'third', 'fourth', 'last' or 'teenth'.

__Understanding:__

For a given month and year, find the corresponding meetup day for a meetup that's supposed to take place on a particular day of the week the ith week of the month.

A typical schedule for a meetup recurs on the same day of the week for a month
- There are always seventeen days (what? in what frame?)
  > _Does this imply that in a period of a year, there will be 17 meetups?_
- A day may otherwise occur 4 or 5 times in a month
  + The teenth may fall on the 2nd or 3rd week for a given
    month
  + The last week may be the 4th or 5th week.

Task
- Find the date (year <CURRENT_YEAR?>, month, date) that corresponds to a
  given input
  + Find the integer day of the month for a weekday of a
    given week.

Input
  - Constructor
    + month, integer
    + year, integer
  - `Meetup#day`
    + Weekday, string
    + Week reference for scheduling, string
    + Returns a `Date` object
Output
  - Date object
    + year
    + month
    + day

`Date` class
- Days counted 0-6 (where 0 is Sunday; see [getDay](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay))
- Day of month corresponds to [getDate](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)

## Examples/Test Cases

```js
/*
YEAR/MONTH/DAY format
target example: 2013/5/13
*/
const meetup = new Meetup(5, 2013);
const date = meetup.day('monday', 'teenth')
// Desired output
//=> Date object for 2013/5/13

// new Date(year, monthIndex); monthIndex zero indexed
let day = // Instantiate day for first of the given month
// see [setDate?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)
```

## Data Structures

- Date object

## Algorithm

1. Define `Meetup` class
  - properties:
    + `month`, Number
    + `yr`, Number
  - Set properties in constructor
1. Define `#day` instance method
  - params:
    + `weekday`
    + `ordinalWeek`

High level for `day`
- Find all days for target day and associated dates (date: int)
- Find target week
  - If `teenth`, interrogate 2nd then 3rd week returning the date in the teen range
  - If `last` return last date from array
  - Else return ith week offset for zero index
- Instantiate a `Date` for return w/ given date

Finding days for target
- Instantiate `dayOfMonth` to `1`
- Instantiate a date object by year, month offset by one, `dayOfMonth`
- Instantiate `daysForWeekday` array
- Iterate while month of date matches target
  - Find day
  - If day is target, push dayOfMonth to `target_days`
  - Increment `dayOfMonth`
  - Set date to `dayOfMonth`
- Return `daysForWeekday`
