import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from 'react-simple-maps';

import geography from '../constants/geography.json';

class Map extends React.Component {
  getStyles = geography => {
    return {
      default: { fill: '#ddd', stroke: '#999', outline: 'none' },
      hover: { fill: '#49c', stroke: '#47a', outline: 'none' },
      pressed: { fill: '#47a', stroke: '#458', outline: 'none' }
    };
  };

  render() {
    return (
      <div>
        <ComposableMap viewBox="0 0 960 1008">
          <ZoomableGroup>
            <Geographies geography={geography} disableOptimization>
              {geographies =>
                geographies.map(geography => (
                  <Geography
                    key={geography.id}
                    geography={geography}
                    style={this.getStyles(geography)}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default Map;
