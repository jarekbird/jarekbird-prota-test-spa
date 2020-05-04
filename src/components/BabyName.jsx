import React, { Component } from "react";
import { connect } from "react-redux";
import { getBabyNameByIndex } from "../reducers/babyNamesReducers";
import { updateBabyName } from "../actions/babyNameActions";
import { bindActionCreators } from "redux";

class BabyName extends Component {
  handleToggleBabyName = () => {
    const { babyName, updateBabyName } = this.props;
    babyName["active"] = !babyName["active"];
    updateBabyName(babyName.id, babyName);
  };
  render() {
    const { babyName } = this.props;
    return (
      <tr onClick={this.handleToggleBabyName}>
        <td>
          {babyName["active"] ? babyName.name : <del>{babyName.name}</del>}
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  babyName: getBabyNameByIndex(state, ownProps.index),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateBabyName }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BabyName);
