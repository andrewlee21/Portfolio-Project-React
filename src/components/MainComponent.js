import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Integrations from "./IntegrationsComponent";
import Solutions from "./SolutionsComponent";
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
        <Home />
        <Solutions />
        <Integrations />
        <Switch>
          <Route path="/solutions" component={Solutions} />
          {/* <Route
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
