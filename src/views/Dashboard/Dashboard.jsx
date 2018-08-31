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
    Favorite Food: <FontAwesomeIcon icon="dove" />
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
                  <div className={"icon icon-info"} style={{float:'left',textAlign:'center',paddingRight:'10px'}}>
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
                  <div className={"icon icon-info"} style={{float:'left',textAlign:'center',paddingRight:'10px'}}>
                    <i className={"now-ui-icons education_paper"}/>
                  </div> 
                  <Col>
                    <div>Total Sold</div>
                    <div style={{paddingLeft:'10px'}}>0 / 50,000,000</div>
                  </Col>  
                </CardBody>
                <CardBody> 
                  <div className={"icon icon-info"} style={{float:'left',textAlign:'center',paddingRight:'10px'}}>
                    <i className={"now-ui-icons ui-2_time-alarm"}/>
                  </div>
                  <div>Token Sell Remaining</div>
                  <Col>
                    <div>Total Sold</div>
                    <div style={{paddingLeft:'10px'}}>0 / 50,000,000</div>
                  </Col>    
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={8}> 
                  
            </Col> 
            <Col xs={12} md={12}>
              <Card className="card-stats card-raised">
                <CardBody>
                  <Row>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="primary"
                        icon="ui-2_chat-round"
                        title="859"
                        subtitle="Messages"
                      />
                    </Col>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="success"
                        icon="business_money-coins"
                        title={
                          <span>
                            <small>$</small>3,521
                          </span>
                        }
                        subtitle="Today Revenue"
                      />
                    </Col>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="info"
                        icon="users_single-02"
                        title="562"
                        subtitle="Customers"
                      />
                    </Col>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="danger"
                        icon="objects_support-17"
                        title="353"
                        subtitle="Support Requests"
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Active Users</CardCategory>
                  <CardTitle tag="h2">34,252</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardActiveUsersChart.data}
                      options={dashboardActiveUsersChart.options}
                    />
                  </div>
                  <Table responsive>
                    <tbody>{this.createTableData()}</tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Summer Email Campaign</CardCategory>
                  <CardTitle tag="h2">55,300</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardSummerChart.data}
                      options={dashboardSummerChart.options}
                    />
                  </div>
                  <div className="card-progress">
                    <Progress badge="Delivery Rate" value="90" />
                    <Progress color="success" badge="Open Rate" value="60" />
                    <Progress color="info" badge="Click Rate" value="12" />
                    <Progress color="primary" badge="Hard Bounce" value="5" />
                    <Progress color="danger" badge="Spam Report" value="0.11" />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Active Countries</CardCategory>
                  <CardTitle tag="h2">105</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardActiveCountriesCard.data}
                      options={dashboardActiveCountriesCard.options}
                    />
                  </div>
                  <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent"
                    zoomOnScroll={false}
                    containerStyle={{
                      width: "100%",
                      height: "280px"
                    }}
                    containerClassName="map"
                    regionStyle={{
                      initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                      }
                    }}
                    series={{
                      regions: [
                        {
                          values: mapData,
                          scale: ["#AAAAAA", "#444444"],
                          normalizeFunction: "polynomial"
                        }
                      ]
                    }}
                  />
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons ui-2_time-alarm", t: "Last 7 days" }]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Card>
                <CardHeader>
                  <CardTitle>Best Selling Products</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive className="table-shopping">
                    <thead>
                      <tr>
                        <th className="text-center" />
                        <th>PRODUCT</th>
                        <th>COLOR</th>
                        <th>Size</th>
                        <th className="text-right">PRICE</th>
                        <th className="text-right">QTY</th>
                        <th className="text-right">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={jacket} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#jacket">Suede Biker Jacket</a>
                          <br />
                          <small>by Saint Laurent</small>
                        </td>
                        <td>Black</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>3,390
                        </td>
                        <td className="td-number">1</td>
                        <td className="td-number">
                          <small>€</small>549
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={shirt} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#shirt">Jersey T-Shirt</a>
                          <br />
                          <small>by Balmain</small>
                        </td>
                        <td>Black</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>499
                        </td>
                        <td className="td-number">2</td>
                        <td className="td-number">
                          <small>€</small>998
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={swim} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#pants">Slim-Fit Swim Short </a>
                          <br />
                          <small>by Prada</small>
                        </td>
                        <td>Red</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>200
                        </td>
                        <td className="td-number">3</td>
                        <td className="td-number">
                          <small>€</small>799
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5" />
                        <td className="td-total">Total</td>
                        <td className="td-price">
                          <small>€</small>2,346
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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
