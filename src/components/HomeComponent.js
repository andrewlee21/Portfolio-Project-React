import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";


function Home(props) {
  return (
    <div className="container">
      <div className="row m-1 m-sm-1 m-md-2 m-lg-3">
        <div className="col-sm-5 p-md-3 p-lg-5">
          <h2 style={{ textAlign: "left" }}>
            <strong>Don't grow in the dark.</strong>
          </h2>
          <h5 style={{ textAlign: "left" }}>
            The solution for optimizing data management across cannabis business
            processes.
          </h5>
          <h5 style={{ textAlign: "left" }}>
            Integrate all your data and get the most out of your traceability
            systems.
          </h5>
          <Link to="/solutions">
            <Button style={{width: 160}} className="btn-dark mt-4  wideButton">
              Learn More
            </Button>
          </Link>
        </div>
        <div class="col-sm-7 pt-2 text-center">
          <img
            className="img-fluid"
            width="60%"
            height="60%"
            src="/img/data-integrations(3)-white.jpg"
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  );
}


export default Home;