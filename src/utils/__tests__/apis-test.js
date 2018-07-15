import { trimPriceData } from '../apis';

test('test trim data with empty array', () => {
  expect(trimPriceData([])).toEqual([]);
});
