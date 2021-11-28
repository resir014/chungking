import { runIfFn } from '.';

describe('utils/run-if-fn', () => {
  test('runs the function', () => {
    const mockFn = jest.fn();
    runIfFn(mockFn);
    expect(mockFn).toBeCalled();
  });
});
