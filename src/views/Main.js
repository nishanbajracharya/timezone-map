import React from 'react';
import spacetime from 'spacetime';

import Map from '../components/Map';

import { BASE_COLOR, BORDER_COLOR, HOVER_COLOR, HOVER_BORDER_COLOR, PRESSED_COLOR, PRESSED_BORDER_COLOR, SELECTED_COLOR } from '../constants/colors';

import { getShadedColor } from '../utils/color';

class Main extends React.Component {
  state = {
    selected: {}
  };

  getMapStyles = (geography, index) => {
    return {
      default: {
        outline: 'none',
        transition: '.5s',
        stroke: BORDER_COLOR,
        fill: this.state.selected.id === geography.id ? SELECTED_COLOR : getShadedColor(BASE_COLOR, index)
      },
      hover: {
        outline: 'none',
        cursor: 'pointer',
        stroke: HOVER_BORDER_COLOR,
        fill: this.state.selected.id === geography.id ? SELECTED_COLOR : HOVER_COLOR
      },
      pressed: {
        outline: 'none',
        cursor: 'pointer',
        fill: PRESSED_COLOR,
        stroke: PRESSED_BORDER_COLOR,
      }
    };
  };

  getCurrentTime = timezone => {
    const time = spacetime.now(timezone);

    return time.unixFmt('yyyy-MM-dd h:mm a');
  };

  handleClick = geography => {
    this.setState(prevState => ({
      selected: prevState.selected.id !== geography.id ? geography : {}
    }));
  };

  render() {
    return (
      <div>
        <Map getStyles={this.getMapStyles} onClick={this.handleClick} />
        {this.state.selected.id && (
          <div className="time-details">
            <p>{this.state.selected.id}</p>
            <p>{this.getCurrentTime(this.state.selected.id)}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Main;
