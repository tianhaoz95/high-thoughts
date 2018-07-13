import axios from 'axios';
import _ from 'lodash';

export function trimPriceData(data) {
  var clean_data = _.remove(data, function (dp) {
    if (dp.average <= 0) {
      return false;
    }
    return true;
  });
  return clean_data;
}

export function getDayStockPrice(stock) {
  return new Promise(function(resolve, reject) {
    var endpoint = 'https://api.iextrading.com/1.0/stock/' + stock + '/chart/1d';
    axios.get(endpoint).then(function (response) {
      resolve(trimPriceData(response.data));
    });
  });
}
