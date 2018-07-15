import React, { Component } from 'react';
import { getLast30Days } from '../../utils/apis';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import dayjs from 'dayjs';
import Button from '@material-ui/core/Button';

class DemoGetLast30Days extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: dayjs(),
      date_list: []
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleChangeDate(event) {
    var dateStr = dayjs(event.target.value);
    this.setState({
      queryDate: dateStr
    });
  }

  handleQuery() {
    this.setState({
      date_list: getLast30Days(this.state.date)
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
                  id="date"
                  label="Select Query Date"
                  type="date"
                  onChange={this.handleChangeDate}
                  defaultValue={this.state.date.format('YYYY-MM-DD')}
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
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.date_list.map((data, idx) => (
              <TableRow key={idx}>
                <TableCell>{idx}</TableCell>
                <TableCell>{data}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default DemoGetLast30Days;
