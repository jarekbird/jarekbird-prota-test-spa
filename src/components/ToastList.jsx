import React, { Component, Fragment } from "react";
import AppToast from "./AppToast";
import { connect } from "react-redux";
import { getBabyNamesErrors } from "../reducers/babyNamesReducers";

class ToastList extends Component {
  render() {
    const { errors } = this.props;
    return (
      <React.Fragment>
        {errors.map((error, index) => {
          return <AppToast key={index} index={index}></AppToast>;
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: getBabyNamesErrors(state),
});

export default connect(mapStateToProps)(ToastList);
