import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error });
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message here
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>{this.state.error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // Add prop validation for children
};

export default ErrorBoundary;
