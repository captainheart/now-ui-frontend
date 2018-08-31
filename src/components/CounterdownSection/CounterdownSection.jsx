import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

class CounterdownSection extends React.Component {
  render() { 
    const days = <h3 className="info-title">{this.props.days}</h3>; 
    const hours = <h3 className="info-title">{this.props.hours}</h3>; 
    const mins = <h3 className="info-title">{this.props.mins}</h3>; 
    const seconds = <h3 className="info-title">{this.props.seconds}</h3>; 
    return (
        <div className="d-flex align-items-center"  style={{marginTop:'35px',marginBottom:'35px'}}>
            <div>
                <div className="time-value font-weight-bold text-center">
                    {this.props.days}
                </div>
                <div className="time-title text-center">days
                </div>
            </div>
            <div className="ml-3">
            <div className="time-value font-weight-bold text-center">
                {this.props.hours}
            </div>
            <div className="time-title text-center">hours</div>
            </div><div className="mx-2 time-separator">:</div>
            <div>
                <div className="time-value font-weight-bold text-center">
                    {this.props.mins}
                </div>
                <div className="time-title text-center">minutes</div>
            </div>
            <div className="mx-2 time-separator">:</div>
            <div>
                <div className="time-value font-weight-bold text-center">
                    {this.props.seconds}
                </div> 
                <div className="time-title text-center">seconds</div>
            </div>
        </div>
    );
  }
} 

export default CounterdownSection;
