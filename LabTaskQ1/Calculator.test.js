

const Calculator = require('./Calculator')

test('test case 1 testing add method', () => {
  expect(Calculator.add(12, 4)).toBe(16);
});

test('test case 1.5 testing add method', () => {
    expect(Calculator.add(13, 4)).toBe(16);
  });

test('test case 2 testing subtract method', () => {
  expect(Calculator.subtract(4, 2)).toBe(2);
});

test('test case 2.5 testing subtract method', () => {
    expect(Calculator.subtract(5, 2)).toBe(2);
  });

test('test case 3 testing multiply method', () => {
    expect(Calculator.multiply(4, 2)).toBe(8);
  });

test('test case 3.5 testing multiply method', () => {
    expect(Calculator.multiply(5, 2)).toBe(8);
  });

test('test case 4 testing divide method', () => {
    expect(Calculator.divide(6, 2)).toBe(3);
  });

test('test case 4.5 testing divide method', () => {
    expect(Calculator.divide(7, 2)).toBe(3);
  });