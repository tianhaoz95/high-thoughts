import dayjs from 'dayjs';
import { trimPriceData } from '../apis';
import { getTodayStockPrice } from '../apis';
import { getLastNDaysTrainingData } from '../apis';

test('test trimPriceData return type', () => {
  expect(trimPriceData([])).toBeInstanceOf(Array);
});

test('test trimPriceData with empty array', () => {
  expect(trimPriceData([])).toEqual([]);
});

test('test trimPriceData with result empty array', () => {
  expect(trimPriceData([{average: 0}])).toEqual([]);
});

test('test getTodayStockPrice return type', () => {
  return expect(getTodayStockPrice('aapl')).resolves.toBeInstanceOf(Array);
});

test('test getLastNDaysTrainingData return type', () => {
  return expect(getLastNDaysTrainingData('aapl', dayjs(), 3)).resolves.toBeInstanceOf(Array);
});
