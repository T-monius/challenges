import assert from 'assert';
import { CircularBuffer } from '../index.js';

describe('Test CircularBuffer class', () => {
  describe('Test #read instance method', () => {
    it('Throws an error when attempting to read from an empty buffer', () => {
      const buffer = new CircularBuffer(1);
      assert.throws(
        () => {
          buffer.read();
        },
        new Error("Can't read from an empty buffer."),
      );
    });
    it('Reads first value written to buffer', () => {
      const buffer = new CircularBuffer(1);
      buffer.write('1');
      const val = buffer.read();

      assert.equal(val, '1');
    });
    it('Write and read back multiple items', () => {
      const max = 3;
      const buffer = new CircularBuffer(max);
      buffer.write('0');
      buffer.write('1');
      buffer.write('2');
      assert.equal(buffer.read(), '0');
      assert.equal(buffer.read(), '1');
      assert.equal(buffer.read(), '2');
    });
  });

  describe('Test #write instance method', () => {
    it('Will not throw an arror when attempting to write to an empty buffer', () => {
      const buffer = new CircularBuffer(1);
      assert.doesNotThrow( () => {
        buffer.write('1');
      }, Error);
    });

    it('Successfully write to an empty buffer', () => {
      const buffer = new CircularBuffer(1);
      buffer.write('1');
      const val = buffer.read();

      assert.equal(val, '1');
    });

    it('Throws an error when attempting to write to a full buffer', () => {
      const buffer = new CircularBuffer(1);
      buffer.write('1');

      assert.throws(() => {
        buffer.write('2');
      }, new Error("Can't write to a full buffer"));
    });

    xit('Writing null does not occupy buffer', () => {
      // ...
    });
  });

  describe('Test #forceWrite instance method', () => {
    it('Overwrites oldest item in a full buffer', () => {
      const buffer = new CircularBuffer(1);
      buffer.write('1');
      buffer.forceWrite('2');

      assert.equal(buffer.read(), '2');
    });
  });

  xdescribe('Test #clear method', () => {
    xit('Clears multiple items from buffer', () => {
      // ...
    });
  });
});
