'use strict';
/* global require, describe, test, expect */

const charAt = require('./charAt');

describe('charAt', () => {
  test('should be a function', () => {
    expect(charAt)
      .toBeInstanceOf(Function);
  });

  test('should not use the original charAt', () => {
    expect(charAt.toString().includes('.charAt('))
      .toBe(false);
  });

  test('should return the first character', () => {
    expect(charAt('abc', 0))
      .toBe('a');
  });

  test('should return the last character', () => {
    expect(charAt('abc', 2))
      .toBe('c');
  });

  test('should return an empty string for negative index', () => {
    expect(charAt('abc', -2))
      .toBe('');
  });

  test('should return an empty string for index outside a string', () => {
    expect(charAt('abc', 20))
      .toBe('');
  });
});
