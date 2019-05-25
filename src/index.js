import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );

  return <div>Hi there!</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));

// Geolocation API will get the current position of the user
// Documentation can be found through Mozilla (MDN)
