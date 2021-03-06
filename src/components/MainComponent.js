import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
//import Directory from './DirectoryComponent'
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    // campsites: state.campsites,
    // comments: state.comments,
    // partners: state.partners,
    // promotions: state.promotions
  };
};

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* <Route path="/home" component={Home} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.props.campsites} />}
          />
          <Route path="/directory/:campsiteId" component={CampsiteWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            render={() => <About partners={this.props.partners} />}
          />
          <Redirect to="/home" /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));
