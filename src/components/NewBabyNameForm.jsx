import React, { Component } from "react";
import { connect } from "react-redux";

class NewBabyNameForm extends Component {
  render() {
    return (
      <div>
        <label>New Baby Name</label>
        <input></input>
        <button>Create</button>
      </div>
    );
  }
}

export default connect()(NewBabyNameForm);
