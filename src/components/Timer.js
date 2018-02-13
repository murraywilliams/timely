import React, { Component } from 'react';
// import Moment from 'react-moment';

class Timer extends Component {
  render() {
    return (
        <tr>
          <th scope="row">{this.props.timer.id || ''}</th>
          <td className="text-left">
            {this.props.timer.description || ''}
            <footer className="blockquote-footer">{this.props.timer.project | ''}</footer>
          </td>
          <td> <i className="far fa-calendar-alt"></i></td>
        </tr>
    );
  }
}

export default Timer;