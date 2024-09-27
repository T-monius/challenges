import { Octal } from '../index'

describe('Test the Octal class', () => {
  test('Test octal 10 is decimal 8.', () => {
    const octal: Octal = new Octal('10');

    expect(octal.toDecimal()).toBe(8);
  });
});
