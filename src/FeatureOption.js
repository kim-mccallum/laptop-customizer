import React, { Component } from 'react';
import './App.css';
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values - Defined here as it seems like a lot to pass this as props throughout the app
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class FeatureOption extends Component {
  render() {
    return (
        <div key={this.props.id} className="feature__item">
            <input
                type="radio"
                id={this.props.id}
                className="feature__option"
                name={slugify(this.props.featureOption.name)}
                // Figure out how this part works to make the event handler work properly
                checked={this.props.featureOption.name === this.props.selectedFeatures[this.props.featureOption.name]}
                //Currently this.props.featureOption is the whole object and value is 'on' 
                onChange={e => this.props.updateFeature(this.props.featureName, this.props.featureOption)}
            />
            <label htmlFor={this.props.id} className="feature__label">
              {this.props.featureOption.name} ({USCurrencyFormat.format(this.props.featureOption.cost)})
            </label>
        </div>
        );
    }
}

export default FeatureOption;