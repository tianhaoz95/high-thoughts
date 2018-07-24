import React from 'react';
import ReactDOM from 'react-dom';
import GenericDataGenerator from '../GenericDataGenerator';

test('Test rendering GenericDataGenerator', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GenericDataGenerator type="unknown"/>, div);
});
