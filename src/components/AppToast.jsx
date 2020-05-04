import React, { Component } from "react";
import { connect } from "react-redux";
import { getErrorByIndex } from "../reducers/babyNamesReducers";
import { Toast } from "react-bootstrap";

class AppToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  handleCloseEvent = () => {
    this.setState({ show: false });
  };
  render() {
    const { error } = this.props;
    return (
      <Toast
        onClose={this.handleCloseEvent}
        show={this.state.show}
        delay={3000}
        autohide
      >
        <Toast.Body>{error}</Toast.Body>
      </Toast>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  error: getErrorByIndex(state, ownProps.index),
});

export default connect(mapStateToProps)(AppToast);
