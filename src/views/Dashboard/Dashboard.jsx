import React from "react";
  
import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/mike.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from "reactstrap";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
 
import {
  FormInputs,
  PanelHeader,
  CardAuthor,
  Stats,
  CardSection,
  CardSocials,
  Statistics,
  CounterdownSection,
  CardCategory,
  CardIcon,
  Button,
  Progress
} from "components";

import {
  dashboardPanelChart,
  dashboardActiveUsersChart,
  dashboardSummerChart,
  dashboardActiveCountriesCard
} from "variables/charts.jsx";

// import jacket from "assets/img/saint-laurent.jpg";
import jacket from "assets/img/saint-laurent.jpg";
import shirt from "assets/img/balmain.jpg";
import swim from "assets/img/prada.jpg";
import coins from "assets/img/coins.jpg";

import { table_data } from "variables/general.jsx";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

class Dashboard extends React.Component {
  createTableData() {
    var tableRows = [];
    for (var i = 0; i < table_data.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td>
            <div className="flag">
              <img src={table_data[i].flag} alt="us_flag" />
            </div>
          </td>
          <td>{table_data[i].country}</td>
          <td className="text-right">{table_data[i].count}</td>
          <td className="text-right">{table_data[i].percentage}</td>
        </tr>
      );
    }
    return tableRows;
  }
  render() {
    return (
      <div>
        <PanelHeader
          size="sm"
          content={
            <div style={{height:'10px'}}/>
          }
        />
        <div className="content">
          <Row>
            <Col md={8} xs={12}>
                <Card className="card-user">
                  <div className="image">
                    <img src={userBackground} alt="..." />
                  </div>
                  <CardBody>
                    <CardAuthor
                      avatar={userAvatar}
                      avatarAlt="..."
                      title="SRT"
                      description="SocialRemit Token"
                    />
                    <p className="description text-center">
                      "We would like to thank you for your interest to our project. You're in your professional account <br />
                      of the SocialRemit token(SRT) sale dashboard"
                    </p>
                    <div>
    Favorite ii: <FontAwesomeIcon icon="dove" />
  </div>
                  </CardBody>
                  <hr /> 
                </Card>
                <Card className="card-tasks"> 
                  <CardHeader> 
                    <Row> 
                      {/*/////////////////////////////*/}
                      <Col xs={6} md={6}>
                        <Card className="card-plain"> 
                          <CardHeader>
                            <div className={"icon icon-info"} style={{float:'left',textAlign:'center',paddingRight:'10px'}}>
                              <i className={"now-ui-icons shopping_credit-card"}/>
                            </div>
                            <div>My SRT Tokens</div>
                          </CardHeader>
                          <CardBody >
                            <CardTitle tag="h3">10 SRT</CardTitle>  
                            <a href="#" target="_blank" rel="noopener noreferrer">Set wallet for Withdrawal</a>
                          </CardBody> 
                        </Card>
                      </Col> 
                      <Col xs={6} md={6}>
                        <Card className="card-plain"> 
                          <CardHeader>
                            <div className={"icon icon-info"} style={{float:'left',textAlign:'center',paddingRight:'10px'}}>
                              <i className={"now-ui-icons shopping_credit-card"}/>
                            </div>
                            <div>My SRT Referral Tokens</div>
                          </CardHeader>
                          <CardBody >
                            <CardTitle tag="h3">0 SRT</CardTitle>  
                            <a href="#" target="_blank" rel="noopener noreferrer">Get more free token</a>
                          </CardBody> 
                        </Card>
                      </Col> 
                    </Row>
                  </CardHeader>
                  <CardBody>
                    {/*SRT Token Price*/} 
                    <Card className="card-plain"> 
                      <CardHeader>
                        <div className={"icon icon-info"} style={{float:'left',textAlign:'center',paddingRight:'10px'}}>
                          <i className={"now-ui-icons business_chart-bar-32"}/>
                        </div>
                        <div>My SRT Referral Tokens</div>
                      </CardHeader> 
                      <CardBody>
                          {/**/}
                          {/* <PriceShowCard>

                          </PriceShowCard> */}
                      </CardBody>
                      <CardFooter>
                        <Row>
                          <Col xs={12} sm={6} md={6} lg={6}>
                              <Card className="card-stats">
                                <CardBody>
                                  <Statistics
                                    horizontal
                                    icon="business_globe"
                                    iconState="warning"
                                    subtitle="1 SRT = 0.000012341 BTC" 
                                  />
                                </CardBody> 
                              </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6}>
                              <Card className="card-stats">
                                <CardBody>
                                  <Statistics
                                    horizontal
                                    icon="objects_diamond"
                                    iconState="warning"
                                    subtitle="1 SRT = 0.00034526 ETH" 
                                  />
                                </CardBody> 
                              </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6}>
                              <Card className="card-stats">
                                <CardBody>
                                  <Statistics
                                    horizontal
                                    icon="business_money-coins"
                                    iconState="warning"
                                    subtitle="1 SRT = 0.1200000 XRP" 
                                  />
                                </CardBody> 
                              </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6}>
                              <Card className="card-stats">
                                <CardBody>
                                  <Statistics
                                    horizontal
                                    icon="objects_support-17"
                                    iconState="warning"
                                    subtitle="1 SRT = 0.00019535 BCH" 
                                  />
                                </CardBody> 
                              </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6}>
                              <Card className="card-stats">
                                <CardBody>
                                  <Statistics
                                    horizontal
                                    icon="business_bank"
                                    iconState="warning"
                                    subtitle="1 SRT = 0.00182999 LTC"  
                                  />
                                </CardBody> 
                              </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6}>
                              <Card className="card-stats">
                                <CardBody>
                                  <Statistics
                                    horizontal
                                    icon="arrows-1_share-66"
                                    iconState="warning"
                                    subtitle="1 SRT = $ 0.15" 
                                  />
                                </CardBody> 
                              </Card>
                            </Col>
                        </Row>
                      </CardFooter> 
                    </Card>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <Stats>
                      {[
                        {
                          i: "now-ui-icons loader_refresh spin",
                          t: "Updated 3 minutes ago"
                        }
                      ]}
                    </Stats>
                  </CardFooter>
                </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader> 
                  <div className={"icon icon-info"} style={{float:'left',textAlign:'center',paddingRight:'25px'}}>
                    <i className={"now-ui-icons design_vector"}/>
                  </div>
                  <div>Token Distribution</div> 
                  <Row>
                    <Col xs={12} md={6} lg={6}>
                      <Card className="card-pricing card-plain">
                        <h6 className="card-category">  Pre ICO</h6>
                        <CardBody>
                          <CardIcon
                            color="success"
                            icon="now-ui-icons media-2_sound-wave"
                          />
                          <CardTitle tag="h3">50M</CardTitle> 
                        </CardBody> 
                      </Card>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                      <Card className="card-pricing card-plain">
                        <h6 className="card-category"> ICO</h6>
                        <CardBody>
                          <CardIcon
                            color="danger"
                            icon="now-ui-icons education_atom"
                          />
                          <CardTitle tag="h3">75M</CardTitle> 
                        </CardBody> 
                      </Card>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody> 
                  <div className={"icon icon-info"} style={{float:'left',textAlign:'center',paddingRight:'25px'}}>
                    <i className={"now-ui-icons education_paper"}/>
                  </div> 
                  <Col>
                    <div>Total Sold</div>
                    <div style={{paddingLeft:'25px'}}>0 / 50,000,000</div>
                  </Col>  
                </CardBody>
                <CardBody> 
                  <div className={"icon icon-info"} style={{float:'left',textAlign:'center',paddingRight:'25px'}}>
                    <i className={"now-ui-icons ui-2_time-alarm"}/>
                  </div> 
                  <Col>
                    <div>Token Sell Remaining</div> 
                    <div style={{paddingLeft:'10px'}}>
                      <CounterdownSection 
                        days="39"
                        hours="21"
                        mins="32"
                        seconds="44" 
                      >
                      </CounterdownSection>
                    </div> 
                  </Col>    
                </CardBody>
              </Card> 
              
              <Card className="card-chart"> 
                <CardBody> 
                  <div className={"icon icon-info"} style={{float:'left',textAlign:'center',paddingRight:'25px'}}>
                    <i className={"now-ui-icons objects_key-25"}/>
                  </div> 
                  <Col>
                    <div>Referral Code</div>
                    <div style={{padding:'25px'}}>
                      <CardTitle tag="h5">5b857a69bb539f3241927a66</CardTitle>  
                    </div>
                    <div style={{paddingLeft:'25px'}}>
                    This is your SRT referral link.You can use it to
                    share with your friends or other interested  parties. If any of them sign up with this link, 
                    you will get reward amounts.
                    </div>
                  </Col>  
                </CardBody> 
                <CardBody> 
                  <div className={"icon icon-info"} style={{float:'left',textAlign:'center',paddingRight:'25px'}}>
                    <i className={"now-ui-icons objects_key-25"}/>
                  </div> 
                  <Col>
                    <div style={{paddingBottom:'25px'}}>Share Code</div> 
                    <div style={{paddingLeft:'25px'}}>
                      <Row> 
                        <Col md={2} sm={1} xs={12}>
                          <Button icon facebook>
                            <i className="fa fa-facebook"> </i>
                          </Button>
                        </Col>
                        <Col md={2} sm={1} xs={12}>
                          <Button icon linkedin>
                            <i className="fa fa-linkedin"> </i>
                          </Button>
                        </Col>
                        <Col md={2} sm={1} xs={12}>
                          <Button icon twitter>
                            <i className="fa fa-twitter"> </i>
                          </Button>
                        </Col>
                        <Col md={2} sm={1} xs={12}>
                          <Button icon dribbble>
                            <i className="fa fa-dribbble"> </i>
                          </Button>
                        </Col>
                        <Col md={2} sm={1} xs={12}>
                          <Button icon reddit>
                            <i className="fa fa-reddit"> </i>
                          </Button>
                        </Col>
                        <Col md={2} sm={1} xs={12}>
                          <Button icon behance>
                            <i className="fa fa-behance"> </i>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>  
                </CardBody> 
              </Card> 
            </Col>   
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
