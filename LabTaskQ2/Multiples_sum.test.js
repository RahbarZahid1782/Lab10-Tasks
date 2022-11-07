const Multiples_sum = require('./Multiples_sum');

test('test case 1 testing Multiples_sum method', () => {
  expect(Multiples_sum(12,4,30)).toBe(112);
});

test('test case 2 testing Multiples_sum method', () => {
    expect(Multiples_sum(12,4,30)).toBe(113);
  });