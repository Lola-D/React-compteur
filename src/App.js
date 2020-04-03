import React from 'react';

import Welcome from './component/Welcome'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Welcome name="Jackson"/>
      </div>
    );
  }
}

export default App;
