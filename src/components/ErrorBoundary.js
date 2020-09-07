import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  };

//   new in react 16 - it's like a try catch - lifecycle hook
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  };

  render() {
    if(this.state.hasError){
        return <h1>Oooooops something bad happened</h1>
    } else{
        return this.props.children
    }
  };
}

export default ErrorBoundary;
