import axios from 'axios';
import _ from 'lodash';
import dayjs from 'dayjs';

export function trimPriceData(data) {
  var clean_data = _.remove(data, function (dp) {
    if (dp.average <= 0) {
      return false;
    }
    return true;
  });
  return clean_data;
}

export function getTodayStockPrice(stock) {
  return new Promise(function(resolve, reject) {
    var endpoint = 'https://api.iextrading.com/1.0/stock/' + stock + '/chart/1d';
    axios.get(endpoint).then(function (response) {
      resolve(trimPriceData(response.data));
    });
  });
}

export function getMonthStockPrice(stock) {
  return new Promise(function(resolve, reject) {
    var endpoint = 'https://api.iextrading.com/1.0/stock/' + stock + '/chart/1m';
    axios.get(endpoint).then(function (response) {
      resolve(trimPriceData(response.data));
    });
  });
}

export function get3MonthStockPrice(stock) {
  return new Promise(function(resolve, reject) {
    var endpoint = 'https://api.iextrading.com/1.0/stock/' + stock + '/chart/3m';
    axios.get(endpoint).then(function (response) {
      resolve(trimPriceData(response.data));
    });
  });
}

export function get6MonthStockPrice(stock) {
  return new Promise(function(resolve, reject) {
    var endpoint = 'https://api.iextrading.com/1.0/stock/' + stock + '/chart/6m';
    axios.get(endpoint).then(function (response) {
      resolve(trimPriceData(response.data));
    });
  });
}

export function getSpecificDayStockPrice(stock, date) {
  return new Promise(function(resolve, reject) {
    var endpoint = "https://api.iextrading.com/1.0/stock/" + stock + "/chart/date/" + date;
    axios.get(endpoint).then(function (response) {
      resolve(trimPriceData(response.data));
    });
  });
}

export function getHighOfTheDay(data) {
  var maxTimeSpan = _.maxBy(data, 'high');
  return maxTimeSpan['high'];
}

export function getLowOfTheDay(data) {
  var minTimeSpan = _.minBy(data, 'low');
  return minTimeSpan['low'];
}

export function getOneDayTrainingData(stock, date) {
  return new Promise(function(resolve, reject) {
    var current = date.format('DDMMYYYY');
    var prev = date.subtract(1, 'day').format('DDMMYYYY');
    Promise.all([
      getSpecificDayStockPrice(stock, current),
      getSpecificDayStockPrice(stock, prev)
    ]).then(function (twoDayData) {
      var dayOne = twoDayData[1];
      var dayTwo = twoDayData[0];
      var dayTwoHigh = getHighOfTheDay(dayTwo);
      var dayTwoLow = getLowOfTheDay(dayTwo);
      resolve({
        prev_day_price_history: dayOne,
        current_day_high: dayTwoHigh,
        current_day_low: dayTwoLow
      });
    });
  });
}

export function getRecentDayStockPrice(stock, cnt) {
  return new Promise(function(resolve, reject) {
    var today = dayjs();
    var date_list = [];
    for (var i = 0; i < cnt; ++i) {
      date_list.push(today.subtract(i, 'day').format('DDMMYYYY'));
    }
    Promise.all(date_list.map((date) => (getSpecificDayStockPrice(stock, date))))
    .then(function (price_list) {
      resolve(price_list);
    });
  });
}
