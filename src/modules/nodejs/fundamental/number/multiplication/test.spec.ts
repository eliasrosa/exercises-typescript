import { customImport } from '../../../../setup';
import type AnswersTypes from './types';

const { double, triple } = customImport(__dirname) as AnswersTypes;

describe('#nodejs', () => {
  describe('#basic', () => {
    describe('#numbers', () => {
      test('deve retorna o dobro do valor', () => {
        expect(double(1)).toBe(2);
        expect(double(2)).toBe(4);
        expect(double(3)).toBe(6);
      });

      test('deve retorna o triplo do valor', () => {
        expect(triple(1)).toBe(3);
        expect(triple(2)).toBe(6);
        expect(triple(3)).toBe(9);
      });
    });
  });
});
