import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import City from '../containers/city';
import { getCities } from '../actions';



class CityList extends Component {
  renderList() {
    
    return this.props.cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  };


  componentWillMount() {
    this.props.getCities();
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    getCities: getCities }, 
    dispatch);
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
