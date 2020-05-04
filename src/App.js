import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BabyNameList from "./components/BabyNameList";
import NewBabyNameForm from "./components/NewBabyNameForm";
import { connect } from "react-redux";
import { setBabyNameListId } from "./actions/babyNameActions";
import { getBabyNamesListId } from "./reducers/babyNamesReducers";
import { Redirect } from "react-router-dom";

const appComponents = (
  <div className="container mt-2">
    <div className="row">
      <div className="col-lg">
        <h3>Baby Name List</h3>
      </div>
      <div className="col-lg">
        <NewBabyNameForm />
      </div>
    </div>
    <BabyNameList />
  </div>
);

function buildRandomId() {
  var result = "";
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 12; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.listId == null) {
      const randomID = buildRandomId();
      this.props.dispatch(setBabyNameListId(randomID));
      return <Redirect to={"?list_id=" + randomID} />;
    }
    return appComponents;
  }
}

const mapStateToProps = (state) => ({
  listId: getBabyNamesListId(state),
});

export default connect(mapStateToProps)(App);
