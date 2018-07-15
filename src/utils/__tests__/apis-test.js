import { trimPriceData } from '../apis';

test('test trim data', () => {
  expect(trimPriceData([])).toEqual([]);
});
