import React from 'react';
// import GoogleMapReact from 'google-map-react';

class BusinessMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.7579747, lng: -73.9877313},
            zoom: 16
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render () {
        return(
            <div className='map-container' id="map-id" ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default BusinessMap;




