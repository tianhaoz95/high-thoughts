import React, { Component } from 'react';
import { getOneDayTrainingData } from '../../utils/apis';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import dayjs from 'dayjs';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

class DemoGetOneDayTrainingData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock_id: 'aapl',
      day_stock_price: null,
      date: dayjs().format('YYYY-MM-DD'),
      queryDate: dayjs(),
      dayData: [],
      loading: false
    };
    this.handleChangeStockID = this.handleChangeStockID.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChangeStockID(event) {
    this.setState({
      stock_id: event.target.value
    });
  }

  handleChangeDate(event) {
    var dateStr = dayjs(event.target.value);
    this.setState({
      queryDate: dateStr
    });
  }

  handleQuery() {
    var obj = this;
    obj.setState({loading: true}, function () {
      getOneDayTrainingData(obj.state.stock_id, obj.state.queryDate)
      .then(function (data) {
        obj.setState({
          dayData: [data],
          loading: false
        });
      });
    });
  }

  render() {
    return (
      <div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  id="name"
                  label="Stock ID"
                  value={this.state.stock_id}
                  onChange={this.handleChangeStockID}
                  margin="normal"/>
              </TableCell>
              <TableCell>
                <TextField
                  id="date"
                  label="Select Query Date"
                  type="date"
                  onChange={this.handleChangeDate}
                  defaultValue={this.state.date}
                  InputLabelProps={{shrink: true,}}/>
              </TableCell>
              <TableCell>
                <Button
                  onClick={this.handleQuery}
                  variant="contained"
                  color="primary">
                  Query
                </Button>
              </TableCell>
              <TableCell>
                {this.state.loading ? (
                  <CircularProgress/>
                ) : (
                  <p>Click to fetch data</p>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Time Length</TableCell>
              <TableCell>High</TableCell>
              <TableCell>Low</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.dayData.map((data, idx) => (
              <TableRow key={idx}>
                <TableCell>{idx}</TableCell>
                <TableCell>{data.prev_day_price_history.length}</TableCell>
                <TableCell>{data.current_day_high}</TableCell>
                <TableCell>{data.current_day_low}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default DemoGetOneDayTrainingData;
