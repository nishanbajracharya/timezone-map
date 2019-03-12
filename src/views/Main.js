import React from 'react';

import Map from '../components/Map';

class Main extends React.Component {
  state = {
    selected: {}
  };

  getMapStyles = geography => {
    return {
      default: {
        fill: this.state.selected.id === geography.id ? '#47a' : '#ddd',
        stroke: '#999',
        outline: 'none'
      },
      hover: { fill: '#49c', stroke: '#47a', outline: 'none' },
      pressed: { fill: '#47a', stroke: '#458', outline: 'none' }
    };
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
        <p>{this.state.selected.id}</p>
      </div>
    );
  }
}

export default Main;
