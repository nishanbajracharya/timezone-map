import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from 'react-simple-maps';

import geography from '../constants/geography.json';

const Map = props => (
  <div className="map-container">
    <ComposableMap height="800" viewBox="0 0 960 1008">
      <ZoomableGroup disablePanning>
        <Geographies geography={geography} disableOptimization>
          {geographies =>
            geographies.map((geography, index) => (
              <Geography
                key={geography.id}
                geography={geography}
                onClick={props.onClick}
                style={props.getStyles(geography, index)}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  </div>
);

export default Map;
