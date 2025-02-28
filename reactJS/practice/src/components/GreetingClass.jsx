import React from "react";

class GreetingClass extends React.Component {
  render() {
    console.log(this.props);

    return (
      <h1 style={{ color: "white", textDecoration: "underline" }}>
        Greeting To {this.props.data} 
        <span style={{color:"pink"}}>{this.props.age}</span>
      </h1>
    );
  }
}

export default GreetingClass;
