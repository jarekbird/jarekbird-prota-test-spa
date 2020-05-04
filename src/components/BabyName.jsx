import React, { Component } from "react";
import { connect } from "react-redux";
import { getBabyNameByIndex } from "../reducers/babyNamesReducers";

class BabyName extends Component {
  render() {
    const { babyName } = this.props;
    return (
      <tr>
        <td>{babyName.name}</td>
      </tr>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  babyName: getBabyNameByIndex(state, ownProps.index),
});

export default connect(mapStateToProps)(BabyName);
