import React from "react";
import { 
  Row, 
  Col,
  Button, 
  InputGroup, 
  InputGroupAddon, 
  Input,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Nav,
  NavItem,
  NavLink} from "reactstrap";

import { CardIcon } from "components";

import Select from "react-select";

import avatar from "assets/img/james.jpg";

var selectOptions = [
  { value: "BTC", label: "BTC" },
  { value: "ETH", label: "ETH" },
  { value: "XRP", label: "XRP" },
  { value: "BCh", label: "BCh" },
  { value: "LTC", label: "LTC" },
  { value: "PPL", label: "PPL" }
];
class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentSelectActive: "btc",
      srtvalue: "",
      amountvalue: "",
      email: "",
      srtvalueState: "",
      amountvalueState: "",
      emailState: ""
    };
    this.srtValueChange = this.srtValueChange.bind(this);
  }
  srtValueChange(e) {
    this.setState({
      srtvalue: e.target.value
    });
    if (e.target.value > 50 ) {
      this.setState({
        srtvalueState: " has-success"
      });
    } else {
      this.setState({
        srtvalueState: " has-danger"
      });
    }
  }
  amountValueChange(e) {
    this.setState({
      amountvalue: e.target.value
    });
    if (e.target.value > 0) {
      this.setState({
        amountvalueState: " has-success"
      });
    } else {
      this.setState({
        amountvalueState: " has-danger"
      });
    }
  } 
  isValidated() {
    if (
      this.state.srtvalueState !== " has-success" ||
      this.state.amountvalueState !== " has-success"  
    ) {
      this.setState({
        srtvalueState: " has-danger",
        amountvalueState: " has-danger" 
      });
      return true;
    }
    return true;
  }
  render() {
    return (
      <div>
        <h5 className="info-text">
          {" "}
          You can enter a number of SRT Tokens you want to buy and calculate the amount you would need to have in your account wallet.
        </h5>
        <Row className="justify-content-right"> 
          <Col xs={12} sm="8" className="ml-auto mr-auto">
            <div className={"icon icon-info"} style={{float:'left',textAlign:'center',padding:'25px',paddingLeft:'50px' }}>
              <i className={"now-ui-icons tech_laptop"}/>
            </div>
            <div style={{padding:'25px'}}>Calculator</div> 
            <Row>  
              <Col xs={12} sm="6">
                  <InputGroup
                  size="s"
                  className={
                    (this.state.srtvalueState ? this.state.srtvalueState : "") +
                    (this.state.srtvalueFocus ? " input-group-focus" : "")
                  }
                  >
                    <InputGroupAddon>
                      <i className="now-ui-icons objects_spaceship" />
                    </InputGroupAddon>
                    <Input
                      defaultValue={this.state.srtvalue}
                      type="text"
                      placeholder="SRT Token (required)"
                      name="srtvalue"
                      onFocus={e => this.setState({ srtvalueFocus: true })}
                      onBlur={e => this.setState({ srtvalueFocus: false })}
                      onChange={e => this.srtValueChange(e)}
                    />
                  </InputGroup> 
                </Col>
                <Col xs={12} md={2}>
                  <Input
                    type="text"
                    disabled
                    placeholder="SRT Token"
                  />
                </Col>
              </Row> 
            <Row> 
              <Col xs={12} sm="6">
                <InputGroup
                  size="s"
                  className={
                    (this.state.amountvalueState ? this.state.amountvalueState : "") +
                    (this.state.amountvalueFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon>
                    <i className="now-ui-icons business_money-coins" />
                  </InputGroupAddon>
                  <Input
                    defaultValue={this.state.amountvalue}
                    type="text"
                    placeholder="Amount You Sell"
                    name="amountvalue"
                    onFocus={e => this.setState({ amountvalueFocus: true })}
                    onBlur={e => this.setState({ amountvalueFocus: false })}
                    onChange={e => this.amountValueChange(e)}
                  />
                </InputGroup> 
              </Col>
              <Col xs={12} md={2}>
                <Select 
                  className="primary"
                  placeholder="Single Select"
                  name="singleSelect"
                  value={this.state.singleSelect}
                  options={selectOptions}
                  onChange={value =>
                    this.setState({ singleSelect: value })
                  }
                />
              </Col>
            </Row>
            <Col xs={12} sm="12"> 
              <div className={"icon icon-info"} style={{float:'left',textAlign:'center',padding:'25px' }}>
                <i className={"now-ui-icons design_bullet-list-67"}/>
              </div>
              <div style={{padding:'25px'}}>Select Payment</div>
              <CardBody>   
                <Row>
                  <Col xs={12} sm={6} md={6} lg={6}> 
                      <Nav pills className="nav-pills-primary flex-column">
                        <NavItem>
                          <NavLink
                            className={
                              this.state.paymentSelectActive === "btc" ? "active" : ""
                            }
                            onClick={() =>
                              this.setState({ paymentSelectActive: "btc" })
                            }
                          >
                            <i className="now-ui-icons business_money-coins" />
                            BITCOIN
                          </NavLink>
                        </NavItem>
                      </Nav>  
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={6}> 
                      <Nav pills className="nav-pills-primary flex-column">
                        <NavItem>
                          <NavLink
                            className={
                              this.state.paymentSelectActive === "eth" ? "active" : ""
                            }
                            onClick={() =>
                              this.setState({ paymentSelectActive: "eth" })
                            }
                          >
                            <i className="now-ui-icons business_chart-bar-32" />
                            ETHEREUM
                          </NavLink>
                        </NavItem>
                      </Nav>  
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={6}> 
                      <Nav pills className="nav-pills-primary flex-column">
                        <NavItem>
                          <NavLink
                            className={
                              this.state.paymentSelectActive === "ltc" ? "active" : ""
                            }
                            onClick={() =>
                              this.setState({ paymentSelectActive: "ltc" })
                            }
                          >
                            <i className="now-ui-icons objects_diamond" />
                            LITECOIN
                          </NavLink>
                        </NavItem>
                      </Nav>  
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={6}> 
                      <Nav pills className="nav-pills-primary flex-column">
                        <NavItem>
                          <NavLink
                            className={
                              this.state.paymentSelectActive === "Fiat" ? "active" : ""
                            }
                            onClick={() =>
                              this.setState({ paymentSelectActive: "Fiat" })
                            }
                          >
                            <i className="now-ui-icons shopping_credit-card" />
                            PAYPAL
                          </NavLink>
                        </NavItem>
                      </Nav>  
                  </Col>
                </Row>
              </CardBody>
            </Col>   
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12} lg={12}>
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
          </Col>  
        </Row> 
      </div>
    );
  }
}

export default Step1;
