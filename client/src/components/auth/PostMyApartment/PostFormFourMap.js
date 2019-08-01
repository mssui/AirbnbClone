import React, { Component } from "react";
import GoogleMapsLoader from "google-maps";

class PostFormFourMap extends Component {
  state = {
    address: null
  };

  componentDidMount() {
    GoogleMapsLoader.KEY = "AIzaSyC4CdABbh98o5L9AeNvYVqdaxDhEXbQSMM";
    GoogleMapsLoader.load(function(google) {
      new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 }
      });
    });
  }
  mapOnChange = () => {
    var map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: { lat: -34.397, lng: 150.644 }
    });
    var geocoder = new window.google.maps.Geocoder();
    this.geocodeAddress(geocoder, map);
  };

  geocodeAddress = (geocoder, resultsMap) => {
    var address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, function(results, status) {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new window.google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };
  render() {
    return (
      <div className="section">
        <div className="row">
          <div className="col s12">
            <h6>Please type your address</h6>
            <input
              id="address"
              type="textbox"
              style={{
                marginTop: "10",
                borderRadius: "6px",
                width: "100%",
                height: "3em"
              }}
              onChange={e => {
                this.setState({
                  address: e.target.value,
                  searchValue: e.target.value
                });
              }}
            />

            <button
              style={{
                marginTop: "10px",
                borderRadius: "6px",
                width: "100%"
              }}
              className="waves-effect waves-light btn"
              onClick={this.mapOnChange}
            >
              Find My Address
            </button>
            <div style={{ width: "100%", height: "500px" }} id="map" />
          </div>
        </div>
      </div>
    );
  }
}
export default PostFormFourMap;
