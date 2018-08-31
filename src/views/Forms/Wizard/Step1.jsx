import React from "react";
import { Row, Col, InputGroup, InputGroupAddon, Input } from "reactstrap";

import { PictureUpload } from "components";

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  // emailChange(e) {
  //   this.setState({
  //     email: e.target.value
  //   });
  //   var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   if (emailRex.test(e.target.value)) {
  //     this.setState({
  //       emailState: " has-success"
  //     });
  //   } else {
  //     this.setState({
  //       emailState: " has-danger"
  //     });
  //   }
  // }
  isValidated() {
    if (
      this.state.srtvalueState !== " has-success" ||
      this.state.amountvalueState !== " has-success"  
    ) {
      this.setState({
        srtvalueState: " has-danger",
        amountvalueState: " has-danger" 
      });
      return false;
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
        <Row className="justify-content-center"> 
          <Col xs={12} sm="6">
            <InputGroup
              size="lg"
              className={
                (this.state.srtvalueState ? this.state.srtvalueState : "") +
                (this.state.srtvalueFocus ? " input-group-focus" : "")
              }
            >
              <InputGroupAddon>
                <i className="now-ui-icons users_circle-08" />
              </InputGroupAddon>
              <Input
                defaultValue={this.state.srtvalue}
                type="text"
                placeholder="First Name (required)"
                name="srtvalue"
                onFocus={e => this.setState({ srtvalueFocus: true })}
                onBlur={e => this.setState({ srtvalueFocus: false })}
                onChange={e => this.srtValueChange(e)}
              />
            </InputGroup>
            <InputGroup
              size="lg"
              className={
                (this.state.amountvalueState ? this.state.amountvalueState : "") +
                (this.state.amountvalueFocus ? " input-group-focus" : "")
              }
            >
              <InputGroupAddon>
                <i className="now-ui-icons text_caps-small" />
              </InputGroupAddon>
              <Input
                defaultValue={this.state.amountvalue}
                type="text"
                placeholder="Last Name (required)"
                name="amountvalue"
                onFocus={e => this.setState({ amountvalueFocus: true })}
                onBlur={e => this.setState({ amountvalueFocus: false })}
                onChange={e => this.amountValueChange(e)}
              />
            </InputGroup>
          </Col>
          <Col xs={12} lg={10} className="mt-3">
            <InputGroup
              size="lg"
              className={
                (this.state.emailState ? this.state.emailState : "") +
                (this.state.emailFocus ? " input-group-focus" : "")
              }
            >
              <InputGroupAddon>
                <i className="now-ui-icons text_caps-small" />
              </InputGroupAddon>
              <Input
                defaultValue={this.state.email}
                type="email"
                placeholder="Email (required)"
                name="email"
                onFocus={e => this.setState({ emailFocus: true })}
                onBlur={e => this.setState({ emailFocus: false })}
                onChange={e => this.emailChange(e)}
              />
            </InputGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Step1;
