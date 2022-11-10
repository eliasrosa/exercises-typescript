import { customImport } from '../../../../../setup';
import { multiple } from './answers';
import type AnswersTypes from './types';

const { double, triple } = customImport(__dirname) as AnswersTypes;

describe('#nodejs', () => {
  describe('#basic', () => {
    describe('#numbers', () => {
      test('deve retornar o dobro do valor', () => {
        expect(double(1)).toBe(2);
        expect(double(2)).toBe(4);
        expect(double(3)).toBe(6);
      });

      test('deve retornar o triplo do valor', () => {
        expect(triple(1)).toBe(3);
        expect(triple(2)).toBe(6);
        expect(triple(3)).toBe(9);
      });

      test('deve retornar a multiplição do valor', () => {
        expect(multiple(0, 1)).toBe(0);
        expect(multiple(5, 10)).toBe(50);
        expect(multiple(10, 8)).toBe(80);
      });
    });
  });
});
