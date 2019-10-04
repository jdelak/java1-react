import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Div extends React.Component {
  render() {
    return <div className={this.props.color} onClick={this.props.onClick} />;
  }
}

class Div2 extends React.Component {
  render() {
    return <div className={this.props.color} id="achanger" />;
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('color') != null){
      this.state = { color: localStorage.getItem('color') };
    }else{
      this.state = { color: 'blue' };
    }

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const currentClassColor = e.currentTarget.className;
    let newColor = currentClassColor;
    this.setState({
      color: newColor
    });
    //alert(currentClassColor);

    if (newColor == "blue") {
      this.setState({ color: "blue" });
    } else if (newColor == "green") {
      this.setState({ color: "green" });
    } else if (newColor == "red") {
      this.setState({ color: "red" });
    } else if (newColor == "yellow") {
      this.setState({ color: "yellow" });
    }

    localStorage.setItem('color', newColor);
  }
  render() {
    return (
      <div>
        Click sur une des 4 div
        <Div color="blue" onClick={this.handleClick} />
        <Div color="red" onClick={this.handleClick} />
        <Div color="green" onClick={this.handleClick} />
        <Div color="yellow" onClick={this.handleClick} />
        <div>
          <Div2 color={this.state.color} />
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Content />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
