import assert from 'assert';
import { Clock } from '../index.js';

describe('Test Clock class', () => {
  describe('Test ::at', () => {
    it('Instantiates a Clock on the hour when just the hour parameter is present', () => {
      const eightOClock = Clock.at(8);
      const humanReadableHour = eightOClock.toStr();

      assert.equal(humanReadableHour, '08:00');
    });

    it('Instantiates a Clock with hour and minute when said parameters are present', () => {
      const justPast11OClock = Clock.at(11, 9);
      const humanReadableHour = justPast11OClock.toStr();
      
      assert.equal(humanReadableHour, '11:09');
    });
  });
  describe('Test #plus', () => {
    it('Adds minutes to the same hour', () => {
      const tenOClock = Clock.at(10);
      tenOClock.plus(3);

      assert.equal(tenOClock.toStr(), '10:03');
    });
    it('Adds minutes beyond the hour', () => {
      const tenOClock = Clock.at(10);
      tenOClock.plus(61);

      assert.equal(tenOClock.toStr(), '11:01');
    });
    it('Wraps around at midnight', () => {
      const twentyThreeThirty = Clock.at(23, 30);
      twentyThreeThirty.plus(60);

      assert.equal(twentyThreeThirty.toStr(), '00:30');
    });
  });
  describe('Test #minus', () => {
    it('Subtracts minutes from a given hour', () => {
      const tenOClock = Clock.at(10);
      tenOClock.minus(90);

      assert.equal(tenOClock.toStr(), '08:30');
    });
  });
  xdescribe('Compare two clocks');
});
