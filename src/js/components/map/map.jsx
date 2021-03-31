import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from "../../../img/location.svg"
import {SCREEN_LATITUDE, SCREEN_LONGITUDE, PIN_LATITUDE, PIN_LONGITUDE} from "../../const.js"

const AnyReactComponent = ({ source }) => <div><img src={source} alt="marker"/></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: SCREEN_LATITUDE,
      lng: SCREEN_LONGITUDE,
    },
    zoom: 18,
  };

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB-IcjyxAAjS1MXEKNDQgvTGo32JiW65P0"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={PIN_LATITUDE}
            lng={PIN_LONGITUDE}
            source={marker}
          />
        </GoogleMapReact>
      </div>
    );
  }
};

export default SimpleMap;