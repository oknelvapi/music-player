import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import musicData from './music-data.json';

import PlayList from './play-list.controller';
import Radio from './radio.controller';
import View from './play-list.view';


const { Wrapper, Main, Header } = View;
export default class App extends Component {
  
  render() {

    return (
      <Wrapper>
        <Router>
          <Main>
            <Header>
              <Link to="/">Playlist</Link>
              <Link to="/radio">Radio</Link>
            </Header>
            <Switch>
              <Route path='/' 
                     render = { () => (
                        <PlayList musicData = { musicData }  />
                     )} 
                    exact />
              <Route path='/radio' component = { Radio } />
              <Route />
            </Switch> 
          </Main>
        </Router>
      </Wrapper>
      
    );
  };
};

