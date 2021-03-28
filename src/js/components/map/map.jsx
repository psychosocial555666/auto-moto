import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from "../../../img/location.svg"
 
const AnyReactComponent = ({ source }) => <div><img src={source} alt="marker"/></div>;;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.968137,
      lng: 30.316263,
    },
    zoom: 18,
  };
 
  render() {
    return (
      <div style={{ height: '271px', width: '431px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB-IcjyxAAjS1MXEKNDQgvTGo32JiW65P0"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.968150}
            lng={30.316275}
            source={marker}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;