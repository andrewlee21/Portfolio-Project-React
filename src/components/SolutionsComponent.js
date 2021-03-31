import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog, faChartBar, faFileInvoice } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";


  const Solutions = (props) => {
  
     const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

    return (
      <React.Fragment>
        <div className="container">
          <div class="row text-center py-4 my-5 middle-section rcorners1">
            <div class="col-sm-4">
              <FontAwesomeIcon icon={faChartBar} size="3x" className="m-3" />

              <h4 class="pb-2">Data Integration</h4>
              <p class="px-4">
                Why track data if it stays separate from all the other aspects
                of your business? Breakdown the silo effect by using our data
                integration tools.
              </p>
            </div>
            <div class="col-sm-4">
              <FontAwesomeIcon icon={faUserCog} size="3x" className="m-3" />
              <h4 class="pb-2">Full Customization</h4>
              <p class="px-4">
                A consultant will work with you through the onboarding process
                and beyond to customize our software to fit your specific
                business processes and needs.
              </p>
            </div>
            <div class="col-sm-4">
              <FontAwesomeIcon icon={faFileInvoice} size="3x" className="m-3" />
              <h4 class="pb-2">Tangible Outputs</h4>
              <p class="px-4">
                Come away with useful sales, production, processing, and
                fulfillment reports, worksheets, schedules as well as cost
                analysis non-cannabis inventory tracking.
              </p>
            </div>
          </div>
          <div className="row pb-5">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Data Tracking
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Automation
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Data Integrations
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  Analysis & Reports
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "5" })}
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  Customization
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                    <p>
                      {" "}
                      Donec faucibus ligula a arcu rutrum, a posuere elit
                      ultricies. Proin efficitur sapien at neque varius
                      ullamcorper. Sed tincidunt dui massa, sed vestibulum ipsum
                      sollicitudin sit amet. Nunc neque sapien, ullamcorper nec
                      justo eget, elementum scelerisque dui. Integer gravida
                      lectus vel facilisis lobortis. Proin fermentum libero nec
                      cursus fringilla. Aliquam sem sapien, pulvinar sit amet
                      rhoncus a, dictum ut dui. Nulla porttitor pretium felis,
                      vitae ultrices est cursus sit amet. Aenean vestibulum
                      mauris a porta consectetur. Suspendisse potenti. Sed id
                      magna in massa rutrum elementum sit amet nec enim. Donec
                      varius magna in nisi facilisis, non lobortis purus
                      feugiat. Morbi elementum aliquam nisi et pulvinar.
                      Suspendisse consectetur elit eu nisi commodo posuere.
                      Donec vitae neque nec eros dapibus tincidunt. Suspendisse
                      ut justo sem.
                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In fermentum, mauris ut accumsan iaculis, nunc urna rutrum
                      mi, et pharetra ex tortor molestie est. Etiam non semper
                      lacus, tristique condimentum nisl. Aenean nibh ante,
                      feugiat ac augue sit amet, mattis mattis augue. Etiam eget
                      risus turpis. Nunc commodo ultricies lacus commodo
                      egestas. Donec ac blandit diam. Sed fringilla eu diam non
                      sodales. Sed feugiat diam justo. Maecenas vehicula dictum
                      metus, non tristique dui eleifend sollicitudin. Mauris mi
                      ex, porta eget eros id, porttitor euismod lacus. Etiam vel
                      lobortis nulla, vitae accumsan nulla. Suspendisse
                      scelerisque dapibus dignissim. Nunc eu mollis orci. Nunc
                      at aliquam diam, id pretium mauris.
                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                    <p>
                      {" "}
                      Donec faucibus ligula a arcu rutrum, a posuere elit
                      ultricies. Proin efficitur sapien at neque varius
                      ullamcorper. Sed tincidunt dui massa, sed vestibulum ipsum
                      sollicitudin sit amet. Nunc neque sapien, ullamcorper nec
                      justo eget, elementum scelerisque dui. Integer gravida
                      lectus vel facilisis lobortis. Proin fermentum libero nec
                      cursus fringilla. Aliquam sem sapien, pulvinar sit amet
                      rhoncus a, dictum ut dui. Nulla porttitor pretium felis,
                      vitae ultrices est cursus sit amet. Aenean vestibulum
                      mauris a porta consectetur. Suspendisse potenti. Sed id
                      magna in massa rutrum elementum sit amet nec enim. Donec
                      varius magna in nisi facilisis, non lobortis purus
                      feugiat. Morbi elementum aliquam nisi et pulvinar.
                      Suspendisse consectetur elit eu nisi commodo posuere.
                      Donec vitae neque nec eros dapibus tincidunt. Suspendisse
                      ut justo sem.
                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="5">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                    <p>
                      {" "}
                      Etiam ut quam justo. Proin consectetur tempor augue eget
                      viverra. Duis id nulla molestie orci placerat pulvinar.
                      Fusce cursus ipsum eros, vitae semper neque tristique et.
                      Donec volutpat nulla massa. Morbi venenatis, purus
                      lobortis auctor posuere, elit sapien ornare elit,
                      vulputate consectetur tellus augue id nunc. Donec tempor
                      nisi non urna venenatis, ac venenatis nisi fringilla.
                      Morbi tristique, diam quis fringilla pellentesque, leo
                      eros vestibulum leo, id hendrerit elit tellus eget mi.
                      Vestibulum sagittis elementum tortor vitae venenatis.
                      Etiam accumsan ex mi, id consectetur metus auctor nec.
                    </p>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </React.Fragment>
    );
  }

export default Solutions;
