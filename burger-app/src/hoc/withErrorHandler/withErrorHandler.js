import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    constructor(props) {
      super(props);

      this.state = {
        error: null
      }
  
      this.reqInterceptor = axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      })
      
      this.resInterceptor = axios.interceptors.response.use(response => response, error => {
        this.setState({ error: error });
      });
    }
    
    errorCleanerHandler = () => {
      this.setState({ error: null });
    }

    // remove interceptors to avoid memory leaks
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      return (
        <Auxiliary>
          <Modal show={this.state.error} modalClosed={this.errorCleanerHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  }
}

export default withErrorHandler;
