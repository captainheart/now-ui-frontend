import React from "react";
import { Row,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardHeader,
  Col } from "reactstrap";

import { IconCheckbox,Button,CardIcon,Progress } from "components"; 
import qrSample from "assets/img/qrSample.jpg";

class Step3 extends React.Component { 
  render() {
    return (
      <div> 
        <Row className="justify-content-center">
          <Col xs={12} sm={8}> 
            <Card className="card-pricing">
              <div className={"icon icon-info"} style={{float:'left',textAlign:'center',padding:'25px',paddingLeft:'50px' }}>
                <i className={"now-ui-icons business_bank"}/>
              </div>
              <div style={{padding:'25px'}}>Deposit Satus</div> 
              <CardBody>  
                <CardTitle>Progress Bars</CardTitle>
                <Progress badge="2 of 4 confirmations received." value="50" ></Progress>  
                <ul>
                  <li>Four confirmations are required to send you SRT Tokens.</li> 
                </ul>
              </CardBody> 
                <CardFooter>
                  <Button href="#pablo" color="info" round >
                    Update
                  </Button>
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
                  <Button href="#pablo" color="primary" round>
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

export default Step3;
