import { describe, test, expect } from 'vitest';
import { formatPrice, calculateDiscount } from '../utils/formatPrice';

describe('formatPrice', () => {
  test('formats price with taka symbol', () => {
    expect(formatPrice(5000)).toBe('৳5,000');
  });

  test('formats zero correctly', () => {
    expect(formatPrice(0)).toBe('৳0');
  });
});

describe('calculateDiscount', () => {
  test('applies 10% discount correctly', () => {
    expect(calculateDiscount(1000, 10)).toBe(900);
  });

  test('applies 50% discount correctly', () => {
    expect(calculateDiscount(2000, 50)).toBe(1000);
  });

  test('zero discount returns original price', () => {
    expect(calculateDiscount(1000, 0)).toBe(1000);
  });
});