import axios from 'axios';
import _ from 'lodash';
import dayjs from 'dayjs';

export function trimPriceData(data) {
  if (data.length > 0) {
    var clean_data = _.remove(data, function (dp) {
      if (dp.average <= 0) {
        return false;
      }
      return true;
    });
    return clean_data;
  } else {
    return [];
  }
}

export function getTodayStockPrice(stock) {
  return new Promise(function(resolve, reject) {
    var endpoint = 'https://api.iextrading.com/1.0/stock/' + stock + '/chart/1d';
    axios.get(endpoint).then(function (response) {
      resolve(trimPriceData(response.data));
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

export function getLast30Days(date) {
  var last_days = [];
  for (var offset = 0; offset < 30; offset++) {
    last_days.push(date.subtract(offset, 'day').format('YYYYMMDD'));
  }
  return last_days;
}

export function getLastNDaysTrainingData(stock, date, n) {
  return new Promise(function(resolve, reject) {
    var last30days = getLast30Days(date);
    var week_days_data = [];
    Promise.all(last30days.map((day) => (getSpecificDayStockPrice(stock, day))))
    .then(function (res_list) {
      _.forEach(res_list, (day_data) => {
        if (day_data.length > 0) {
          week_days_data.push(day_data);
        }
      });
      var res_data = [];
      if (week_days_data.length > n+1) {
        res_data = _.take(week_days_data, n+1);
      } else {
        res_data = week_days_data;
      }
      var train_data = [];
      for (var idx = 0; idx < res_data.length-1; ++idx) {
        train_data.push({
          prev_day_price_history: res_data[idx+1],
          current_day_high: getHighOfTheDay(res_data[idx]),
          current_day_low: getLowOfTheDay(res_data[idx])
        });
      }
      resolve(train_data);
    });
  });
}

export function getOneDayTrainingData(stock, date) {
  return new Promise(function(resolve, reject) {
    var current = date.format('YYYYMMDD');
    var prev = date.subtract(1, 'day').format('YYYYMMDD');
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

export function getPrevDaysTrainingData(stock, date, length) {
  return new Promise(function(resolve, reject) {
    var dates = [];
    for (var offset = 0; offset < length; ++offset) {
      var current = date.subtract(offset, 'day');
      dates.push(current);
    }
    Promise.all(dates.map((date) => (getOneDayTrainingData(stock, date))))
    .then(function (res_list) {
      resolve(res_list);
    })
  });
}
