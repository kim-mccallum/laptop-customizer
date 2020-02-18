import React, { Component } from 'react';
import Feature from './Feature';
import './App.css';


class FeaturesList extends Component {
  render() {
    //   Map over features, call Feature component passing key, features, props and callback
    const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        return(
            <Feature 
                id={featureHash}
                // change this name so that it's clearly an array
                feature = {this.props.features[feature]}
                selectedFeatures={this.props.selectedFeatures}
                updateFeature = {this.props.updateFeature}
                featureName = {feature}
                key={featureHash}
            />
        )
    });
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
      </form>
    );
  }
}

export default FeaturesList;