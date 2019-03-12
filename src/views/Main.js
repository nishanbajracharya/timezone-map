import React from 'react';

import Map from '../components/Map';

class Main extends React.Component {

  getMapStyles = geography => {
    return {
      default: { fill: '#ddd', stroke: '#999', outline: 'none' },
      hover: { fill: '#49c', stroke: '#47a', outline: 'none' },
      pressed: { fill: '#47a', stroke: '#458', outline: 'none' }
    };
  }

  handleClick = geography => {
    console.log(geography)
  }

  render() {
    return <div><Map getStyles={this.getMapStyles} onClick={this.handleClick} /></div>;
  }
}

export default Main;
