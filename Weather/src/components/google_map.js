import React, { Component } from 'react'

class GoogleMap extends Component {

  componentDidMount(){
    //this is how we create an embedded google map inside our document
    //takes HTML reference and finds element and renders it
    new google.maps.Map(this.refs.map, {
      zoom:12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render(){
    //allows us to get direct reference to html element
    //this.refs.map allows us to access said element
    return<div ref="map" />;

  };
}

export default GoogleMap;
