import { jest } from '@jest/globals';
import * as module from './file.js';

describe('TESTING JEST 27.3.1 with ESM', () => {
  let spy;
  beforeAll(() => {
    spy = jest.spyOn(module, 'moduleFunction').mockImplementation(() => 'mocked');
  });

  afterAll(() => {
    spy.mockRestore();
  });

  it('mocking an esm exported function', () => {
    expect(module.moduleFunction()).toEqual('mocked');
  });
});
