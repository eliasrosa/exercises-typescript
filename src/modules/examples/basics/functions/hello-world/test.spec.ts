/* eslint-disable no-template-curly-in-string */
import { customImport } from '../../../../setup';
import type AnswersTypes from './types';

const { HelloWorld, HelloWorldYear } = customImport(__dirname) as AnswersTypes;

describe('#examples', () => {
  describe('#helo-world', () => {
    test('deve retornar Hello World', () => {
      expect(HelloWorld()).toBe('Hello World');
    });

    test('deve retornar Hello World ${year}', () => {
      expect(HelloWorldYear(2022)).toBe('Hello World 2022');
      expect(HelloWorldYear(2023)).toBe('Hello World 2023');
      expect(HelloWorldYear(2024)).toBe('Hello World 2024');
    });
  });
});
