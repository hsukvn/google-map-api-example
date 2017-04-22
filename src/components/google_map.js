import React, { Component } from 'react';

export default class GoogleMap extends Component {
  shouldComponentUpdate() {
    return false; // never rerender
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }

  render() {
    return (
      <div id="map" ref="map" />
    );
  }
}
