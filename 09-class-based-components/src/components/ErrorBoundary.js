import { Component } from 'react';
import classes from './ErrorBoundary.module.css';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    console.error(`🔴 Error Boundary Message: ${error.message}`);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError)
      return <p className={classes.error}>No users found!</p>;
    return this.props.children;
  }
}

export default ErrorBoundary;
