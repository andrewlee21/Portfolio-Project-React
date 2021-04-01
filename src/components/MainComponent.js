import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Integrations from "./IntegrationsComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Background from "../images/background_image.jpg";

const mapStateToProps = (state) => {
  return {
    // campsites: state.campsites,
    // comments: state.comments,
    // partners: state.partners,
    // promotions: state.promotions
  };
};

var sectionStyle = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${Background})`,
};

class Main extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <div >
          <Home />
          <Integrations />
        </div>
        <Switch>
          <Route path="/home" component={Home} />
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
