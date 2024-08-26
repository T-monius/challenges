# Clock

## Problem

__Undserstanding:__

Time keeping
- Independant of date
- Clocks compared by time
- _Minutes and hours_
- `::at`
  + Takes hour and minute arguments
    > Two parameters:
      1. Integer, hour
      2. Integer, minute
  + Returns a new clock object
  + Piggy backs off of the constructor
    + Instantiate a Date object?
- `#toStr`
  + Returns a string in `'00:00'` format
- `::compareClocks`
  + Compare by total minutes
- `::plus`
  + Params
    > Single integer
    > Represents minutes
  + Add to total minutes
- `::minus`
  + Subtract from total minutes
  + Integer input represents minutes

## Examples/Test Cases

```js
// ::at static method
const eightOClock = Clock.at(8);
//=> Clock object w/ internal time (Time object?) representing '08:00'
eightOClock.toStr();
//=> '08:00'
const justPast11OClock = Clock.at(11, 9);
//=> Clock object w/ internal time (Time object?) representing '11:09'
justPast11OClock.toStr();
//=> '11:09'
// 24 hour time
const pastFifteenHundredOClock = Clock.at(15, 43);
//=> Clock object w/ internal time (Time object?) representing '15:43'
pastFifteenHundredOClock.toStr();
//=> '15:43'
```

## Data Structures

- String

## Algorithm

1. Instantiate `Clock` class
1. Define `constructor`
1.   Set `hr` and `min` attributes
1. Define `::at`
  - guard clause?
  - Pass params to `new`
  - Return new clock
1. Define `#toStr`
  - Interpolate `hr` and `min` into a string
  - ^ Conditionally pad leading zero if num less than 10
1. Define `#plus`
  - Derive `currentMinutes` by multiplying `this.hr` by `minutesInAnHour` (i.e. 60) and adding `this.min`
  - Add `currentMinutes` to minutes input as `totalMins`
  - Get remainder of `minutesInADay` from `totalMins`
  - Divide out hours as `hours` rounding down (`Math.floor`)
  - Remainder of `totalMinutes` and `minutesInAnHour` as `mins`
  - Reset `this.hr` and `this.min`
1. Define `#minus`
  - Same initial steps as `#plus` except _subtract_ input minutes from `currentMinutes`
