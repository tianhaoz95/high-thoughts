import React, { Component } from 'react';
import { getLastNDaysTrainingData } from '../../utils/apis';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import dayjs from 'dayjs';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

class DemoGetLastDaysTrainingData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock_id: 'aapl',
      date: dayjs(),
      timelen: 5,
      data_list: [],
      loading: false
    };
    this.handleChangeStockID = this.handleChangeStockID.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleTimelenChange = this.handleTimelenChange.bind(this);
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

  handleTimelenChange() {
    this.setState({
      timelen: event.target.value,
    });
  }

  handleQuery() {
    var obj = this;
    obj.setState({loading: true}, function () {
      getLastNDaysTrainingData(obj.state.stock_id, obj.state.date, obj.state.timelen)
      .then(function (data) {
        obj.setState({
          data_list: data,
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
                  defaultValue={this.state.date.format('YYYY-MM-DD')}
                  InputLabelProps={{shrink: true,}}/>
              </TableCell>
              <TableCell>
                <TextField
                  id="number"
                  label="Number"
                  value={this.state.timelen}
                  onChange={this.handleTimelenChange}
                  type="number"
                  InputLabelProps={{shrink: true}}
                  margin="normal"/>
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
                  null
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Previous Time Length</TableCell>
              <TableCell>Current Day High</TableCell>
              <TableCell>Current Day Low</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data_list.map((data, idx) => (
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

export default DemoGetLastDaysTrainingData;
