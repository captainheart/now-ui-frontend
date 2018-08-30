import React from "react";

class CardSection extends React.Component {
  render() {
    return (
      <div>
        <div> 
            {this.props.title}
        </div>
        <div>
            {this.props.content}
        </div>
      </div>
    );
  }
}

export default CardSection;
