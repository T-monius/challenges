import assert from 'assert';
import { Luhn } from '../index.js';

describe('Test Luhn Class', () => {
  describe('Test #addends instance method', () => {
    it('Creates an array of integers from a number none of whose digits doubled surpasses 9', () => {
      const num = 12121;
      const luhn = new Luhn(num);
      const addends = luhn.addends();

      assert.deepEqual([1, 4, 1, 4, 1], addends);
    });
    it('Successfully produces addends for a number some of whose values doubled are greater than nine', () => {
      const num = 8631;
      const luhn = new Luhn(num);
      const addends = luhn.addends();

      assert.deepEqual([7, 6, 6, 1], addends);
    });
  });
  describe('Test #checksum instance method', () => {
    it('Produces a checksum for a four digit number', () => {
      const num = 4913;
      const luhn = new Luhn(num);
      const checksum = luhn.checksum()

      assert.equal(22, checksum);
    });
    it('Produces a checksum for a 6 digit number', () => {
      const num = 201773;
      const luhn = new Luhn(num);
      const checksum = luhn.checksum()

      assert.equal(21, checksum);
    });
  });
  describe('Test #isValid instance method', () => {
    it('Identifies a valid number', () => {
      const num = 8739567;
      const luhn = new Luhn(num);
      const validity = luhn.isValid();

      assert(validity);
    });
    it('Identifies an invalid number', () => {
      const num = 738;
      const luhn = new Luhn(num);
      const validity = luhn.isValid();

      assert(!validity);
    });
  });
  xdescribe('Test ::create static method', () => {
    it('Creates a valid number from a three digit invalid number', () => {
      const num = 123;
      const luhnNumber = Luhn.create(num);

      assert.equal(1230 ,luhnNumber);

      const luhn = new Luhn(luhnNumber);
      assert(luhn.isValid());
    });
    it('Creates a valid number from a three digit invalid number', () => {
      const num = 873956;
      const luhnNumber = Luhn.create(num);

      assert.equal(8739567 ,luhnNumber);

      const luhn = new Luhn(luhnNumber);
      assert(luhn.isValid());
    });
  });
});
