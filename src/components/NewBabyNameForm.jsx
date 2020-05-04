import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createBabyName } from "../actions/babyNameActions";
import { getBabyNamesListId } from "../reducers/babyNamesReducers";

class NewBabyNameForm extends Component {
  handleCreateBabyName = () => {
    const babyName = this.nameInput.value;
    const { createBabyName } = this.props;
    ReactDOM.findDOMNode(this.nameInput).value = "";
    createBabyName({
      name: babyName,
      active: true,
      list_id: this.props.listId,
    });
  };

  render() {
    const { createBabyName } = this.props;
    return (
      <div className="form-group form-inline float-right">
        <label className="mr-2">New Baby Name</label>
        <input
          className="form-control mr-1"
          ref={(input) => (this.nameInput = input)}
        ></input>
        <button className="btn btn-primary" onClick={this.handleCreateBabyName}>
          Create
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listId: getBabyNamesListId(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createBabyName }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewBabyNameForm);
