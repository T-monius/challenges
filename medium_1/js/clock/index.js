const minutesInAnHour = 60;
const minutesInADay = 1440;

class Clock {
  constructor(hr, min) {
    this.hr = hr;
    this.min = min;
  }

  toStr() {
    const isLeadingZero = this.hr < 10 || this.hr === 0;
    const isSecondaryLeadingZero = this.min && this.min < 10;
    const hours = `${isLeadingZero ? 0 : ''}${this.hr}`;
    const minutes = `${isSecondaryLeadingZero ? 0 : ''}${this.min || '00'}`

    return `${hours}:${minutes}`;
  }

  plus(additionalMins) {
    const currentMins = Clock.currentMins(this.hr, this.min);
    let totalMins = currentMins + additionalMins;
    totalMins %= minutesInADay;
    const hour = Math.floor(totalMins / minutesInAnHour);
    const mins = totalMins % minutesInAnHour;

    this.hr = hour;
    this.min = mins;
  }

  minus(lessMinutes) {
    const currentMins = Clock.currentMins(this.hr, this.min);
    let totalMins = currentMins - lessMinutes;
    totalMins %= minutesInADay;
    const hour = Math.floor(totalMins / minutesInAnHour);
    const mins = totalMins % minutesInAnHour;

    this.hr = hour;
    this.min = mins;
  }

  static at(hr, min) {
    return new Clock(hr, min);
  }

  static currentMins(hr, min) {
    return hr * minutesInAnHour + (min || 0);
  }
}

export { Clock };