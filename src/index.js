import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props); //have to do this every time

    // THIS IS THE ONLY TIME WE DO A DIRECT ASSIGNMENT TO this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setState!!!!
        this.setState({ lat: position.coords.latitude });

        // we did not!!!
        // this.state.lat = position.coords.latitude
      },
      err => console.log(err)
    );
  }
  // Defined our constructor method and initialized our state object

  // React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

// Geolocation API will get the current position of the user
// Documentation can be found through Mozilla (MDN)
