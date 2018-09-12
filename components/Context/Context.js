import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Context extends Component {
  static get childContextTypes() {
    return {
      page: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.number
      }),
      user: PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    };
  }

  getChildContext() {
    return { page: this.props.page, user: this.props.user };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default Context;
