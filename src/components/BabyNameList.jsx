import React, { Component } from "react";
import BabyName from "./BabyName";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchBabyNames } from "../actions/babyNameActions";
import {
  getBabyNamesError,
  getBabyNames,
  getBabyNamesPending,
  getBabyNamesListId,
} from "../reducers/babyNamesReducers";

class BabyNameList extends Component {
  constructor(props) {
    super(props);
    const { fetchBabyNames } = this.props;
    fetchBabyNames(this.props.listId);
  }

  render() {
    const { babyNames, error } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {babyNames.map((babyName, index) => {
            return <BabyName key={index} index={index} />;
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getBabyNamesError(state),
  babyNames: getBabyNames(state),
  pending: getBabyNamesPending(state),
  listId: getBabyNamesListId(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchBabyNames }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BabyNameList);
