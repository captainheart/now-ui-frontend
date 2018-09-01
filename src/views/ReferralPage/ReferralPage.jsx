import React from "react";
import { Card, CardHeader,CardFooter, CardBody, Row, Col,CardTitle,Button,Table } from "reactstrap";

import { PanelHeader, CardIcon} from "components";


import { thead, tbody } from "variables/general"; 
 

class ReferralPage extends React.Component {
    
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={8} xs={12}>  
            <Card>
              <div className={"icon icon-info"} style={{float:'left',textAlign:'center',padding:'25px',paddingLeft:'50px' }}>
                <i className={"now-ui-icons business_globe"}/>
              </div>
              <div style={{padding:'25px'}}>Referral Program</div>
              <CardBody> 
                  <Row> 
                    <Col xs={12} lg={6}>
                        <Card className="card-pricing">
                            {/* <h6 className="card-category"> Alpha Pack</h6> */}
                            <CardBody>
                            <CardIcon
                                color="primary"
                                icon="now-ui-icons users_single-02"
                            />
                            <CardTitle tag="h3">0</CardTitle>
                            <ul>
                                <li>Total friends referred</li> 
                            </ul>
                            </CardBody> 
                        </Card>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Card className="card-pricing ">
                            {/* <h6 className="card-category"> Alpha Pack</h6> */}
                            <CardBody>
                            <CardIcon
                                color="primary"
                                icon="now-ui-icons business_money-coins"
                            />
                            <CardTitle tag="h3">0</CardTitle>
                            <ul>
                                <li>SRT Token earned</li> 
                            </ul>
                            </CardBody> 
                        </Card>
                        </Col>
                  </Row>
              </CardBody>
               
              <div className={"icon icon-info"} style={{float:'left',textAlign:'center',padding:'25px',paddingLeft:'50px' }}>
                <i className={"now-ui-icons users_circle-08"}/>
              </div>
              <div style={{padding:'25px'}}>Users who have accepted your invitation </div>
              <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        {thead.map((prop, key) => {
                          if (key === thead.length - 1)
                            return (
                              <th key={key} className="text-right">
                                {prop}
                              </th>
                            );
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tbody.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.data.map((prop, key) => {
                              if (key === thead.length - 1)
                                return (
                                  <td key={key} className="text-right">
                                    {prop}
                                  </td>
                                );
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>

            </Card> 
            </Col>
            <Col xs={12} md={4}> 
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
                          <Button>
                            <i className="fa fa-facebook"> </i>
                          </Button>
                        </Col>
                        <Col md={2} sm={1} xs={12}>
                          <Button>
                            <i className="fa fa-linkedin"> </i>
                          </Button>
                        </Col>
                        <Col md={2} sm={1} xs={12}>
                          <Button>
                            <i className="fa fa-twitter"> </i>
                          </Button>
                        </Col>
                        <Col md={2} sm={1} xs={12}>
                          <Button>
                            <i className="fa fa-dribbble"> </i>
                          </Button>
                        </Col>
                        <Col md={2} sm={1} xs={12}>
                          <Button>
                            <i className="fa fa-reddit"> </i>
                          </Button>
                        </Col>
                        <Col md={2} sm={1} xs={12}>
                          <Button>
                            <i className="fa fa-behance"> </i>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>  
                </CardBody> 
              </Card>  
            <Card className="card-pricing">
                <h6 className="card-category">My SocialRemit Tokens</h6>
                <CardBody>
                  <CardIcon
                    color="primary"
                    icon="now-ui-icons objects_diamond"
                  />
                  <CardTitle tag="h3">0 SRT</CardTitle>
                  <ul>
                    <li>Did you set wallet for withdraw?</li> 
                  </ul>
                </CardBody>
                <CardFooter>
                  <Button href="#pablo" color="primary">
                    Set wallet
                  </Button>
                </CardFooter>
              </Card> 
            </Col> 
          </Row>
        </div>
      </div>
    );
  }
}

export default ReferralPage;
