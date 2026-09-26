import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add', () => {
    test('should add two positives numbers', () => {
        // !1. Arrange
        const a = 1;
        const b = 2;
        // !1. Act
        const result = add(a, b);
        // !1. Assert
        expect(result).toBe(3);
    });

    test('should add two negative numbers', () => {
        // !1. Arrange
        const a = -1;
        const b = -2;
        // !1. Act
        const result = add(a, b);
        // !1. Assert
        expect(result).toBe(-3);
    });
})


describe('subtract', () => {
    test('should subtract two positives numbers', () => {
        // !1. Arrange
        const a = 1;
        const b = 2;
        // !1. Act
        const result = subtract(a, b);
        // !1. Assert
        expect(result).toBe(-1);
    });

    test('should subtract a negative number', () => {
        const a = 5, b = -2;
        const result = subtract(a, b);
        expect(result).toBe(7);
    });
});


describe('multiply', () => {
    test('should multiply two positives numbers', () => {
        // !1. Arrange
        const a = 1;
        const b = 2;
        // !1. Act
        const result = multiply(a, b);
        // !1. Assert
        expect(result).toBe(2);
    });

    test('should multiply two negatives numbers', () => {
        // !1. Arrange
        const a = -1;
        const b = -2;
        // !1. Act
        const result = multiply(a, b);
        // !1. Assert
        expect(result).toBe(2);
    });
})



