import React, { Component } from "react";

import Error404 from "./Error404";

class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(_error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return <Error404 />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
