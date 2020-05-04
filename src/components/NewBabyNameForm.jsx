import React, { Component } from "react";
import { connect } from "react-redux";

class NewBabyNameForm extends Component {
  render() {
    return (
      <div>
        <label>New Baby Name</label>
        <input></input>
        <button onClick={this.props.}>Create</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchBabyNames }, dispatch);

export default connect({}, mapDispatchToProps)(NewBabyNameForm);
