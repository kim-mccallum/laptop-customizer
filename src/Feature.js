import React, { Component } from 'react';
import FeatureOption from './FeatureOption';
import './App.css';
import slugify from 'slugify';


class Feature extends Component {
  render() {
    //   Map over options, call FeatureOption passing key, state and callback props

    const options = this.props.feature.map((item, idx) => {
        const itemHash = slugify(JSON.stringify(item));
        return(
            <FeatureOption 
                id={itemHash}
                featureOption = {this.props.feature[idx]}
                selectedFeatures={this.props.selectedFeatures}
                updateFeature = {this.props.updateFeature}  
                // trying to fix error -Warning: Each child in a list should have a unique "key" prop
                key={itemHash}          
            />
        )
    });

      return (
        <fieldset className="feature" key={this.props.id}>
          <legend className="feature__name">
            <h3>{this.props.featureName}</h3>
          </legend>
          {options}
        </fieldset>
      );

  }
}

export default Feature;