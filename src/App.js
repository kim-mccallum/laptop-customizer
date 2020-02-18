import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import './App.css';
import FeaturesList from './FeaturesList';
import Cart from './Cart';

class App extends Component {
  // state stays here
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
  // Figure out how this works - Object.assign? 
  updateFeature = (feature, newValue) => {
    console.log(feature)
    console.log(newValue)
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        {/* Call FeaturesList component here -give it props, pass state and callback props*/}
        <FeaturesList 
          features={this.props.features}  
          selectedFeatures={this.state.selected}
          updateFeature = {this.updateFeature}
        />
        <Cart 
          selectedFeatures={this.state.selected}
        />
      </div>
    );
  }
}

export default App;
