import React from "react";
import { Row,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardHeader,
  Button,
  Col } from "reactstrap";

import { IconCheckbox,CardIcon } from "components"; 
import qrSample from "assets/img/qrSample.jpg";

class Step2 extends React.Component {
  render() {
    return (
      <div> 
        <Row className="justify-content-center">
          <Col xs={12} sm={8}> 
            <Card>
              <div className={"icon icon-info"} style={{float:'left',textAlign:'center',padding:'25px',paddingLeft:'50px' }}>
                <i className={"now-ui-icons business_bank"}/>
              </div>
              <div style={{padding:'25px'}}>Currency Deposit</div>
              <CardFooter>
                <h5>1. Your personal unique address for payment:</h5>
              </CardFooter>
              <CardBody> 
                  <Row>
                    <Col xs={12} sm={6}> 
                      <p className="description text-center">
                        2Mw6ghcCt4MA5Ys5mocFDbPoazF55rogpoC
                      </p>
                    </Col> 
                    <Col xs={12} sm={6}> 
                      <div className="card-avatar">
                        <a href="#pablo">
                          <img className="img img-raised" src={qrSample} alt="..." />
                        </a>
                      </div>
                    </Col> 
                  </Row>
              </CardBody>
              <CardFooter> 
                <h5>2. Go to your wallet / exchange / mining pool account and send funds to generated address. Please make sure your deposit equals or exceeds the minimum purchase amount( at the current exchange rate, it is 0.00102600 BTC )</h5>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={4}> 
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
    );
  }
}

export default Step2;
