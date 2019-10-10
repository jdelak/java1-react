import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, Redirect } from "react-router-dom";

class Button extends React.Component {
  render() {
    return (<button value={this.props.val} onClick={this.props.onClick}>Envoyer</button>);
  }
}


class Todos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text:'',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    let value = document.getElementById(
      'valeur').value;

     await this.setState({
      text: value,
    });

    window.location.href="/todos/"+this.state.text;
  }

  render (){
  return(
    <div>
      <h2>Todo</h2>
      <input
      id="valeur"
       type="text"
       placeholder="Entrer valeur"
       name="valeur"
       />
       <Button val="envoyer" onClick={this.handleClick}/>

     </div>
  );
  }
}

function Todo() {
  let { todoId } = useParams();

  return (
    <div>
      <h3>Hey j'ai récupéré {todoId} comme valeur!</h3>
    </div>
  );
}

class About extends React.Component {

  render(){
    return (
      <div>
        <h2>About</h2>
        <div>
        Nulla facilisi. Suspendisse potenti. Pellentesque nec justo leo. Donec quis ex vel sem faucibus volutpat vel eu augue. Sed auctor viverra faucibus. Ut tincidunt libero ut scelerisque rutrum. Vestibulum luctus dignissim risus at tincidunt. Sed consectetur lacinia ante in feugiat. Nullam ut venenatis dolor. Proin eu elementum tortor. Duis non nisi in massa auctor congue eget nec nulla. Duis blandit dui ipsum, quis rhoncus turpis porta ut. Maecenas ornare porta quam in sodales. In porta luctus accumsan. Maecenas vel imperdiet risus.
        </div>
      </div>
    ) ;
  }
}

export default class App extends React.Component {

  render(){
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Switch>
        <Route path="/todos/:todoId">
            <Todo />
          </Route>
          <Route path="/about">
            <About />
          </Route>
            <Route path="/">
              <Todos />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }

}
