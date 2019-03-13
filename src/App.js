import React, { Component } from 'react';
import musicData from './music-data.json';

import PlayList from './play-list.controller';
import View from './play-list.view';

const { Wrapper, Main, Header, HeaderButton } = View;
export default class App extends Component {
  
  render() {

    return (
      <Wrapper>
        <Main>
          <Header>
            <HeaderButton type='button'>Playlist</HeaderButton>
            <HeaderButton type='button'>Radio</HeaderButton>
          </Header>
          <PlayList musicData = { musicData } />           
        </Main>
      </Wrapper>
      
    );
  };
};

