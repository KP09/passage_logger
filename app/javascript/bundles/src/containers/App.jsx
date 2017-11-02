import React from 'react';
import ReactOnRails from 'react-on-rails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PassagesContainer } from './PassagesContainer';
import { HelloWorld } from '../components/HelloWorld';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/passages" exact>
            <PassagesContainer passages={this.props.passages}/>
          </Route>
          <Route path="/passages/new" exact>
            <HelloWorld name={"Kees"} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
