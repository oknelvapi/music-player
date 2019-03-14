//import React, { Component } from 'react';
import styled from 'styled-components';

export default {
  Wrapper: styled.div`
   background-image: url(https://s.0332.ua/section/newsInternalIcon/upload/images/news/icon/000/044/666/monatik03_5b9cf91c40a23.jpg);
	background-size: cover;
  display: flex;
  align-items: flex-end;
  width: 100vw;
  height: 100vh;
  `,

  Main: styled.main`
    background-color: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255);
    width: 613px; 
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  `,

  Header: styled.header`
  margin-top: 25px;
  margin-bottom: 14px;
  `,
  HeaderButton: styled.button` 
    background-color: transparent;
    background-repeat:no-repeat;
    border: none;
    color: white;
    cursor:pointer;
    font-size: 18px;
    outline:none;
  `,

  Player: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
    padding-left: 70px;
    width: 100%;
`,

  ButtonsBlock: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-content: flex-start;
    align-items: center;
    padding-right: 60px;
  `,
  PlayButtons: styled.img`
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: inline-block;
    padding: 0 4px;
  `,

  TrackTitleBlock: styled.div`
    width: 70%;
    margin-left: auto;
    margin-bottom: 18px;
    padding-right: 35px;
  `,
  TrackTitle: styled.span`
    font-weight: ${ props => props.bold ?
    "bold" : "normal"};
    font-size: 24px;
  `,

  ControlBlock: styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 70%;
    margin-left: auto;
    margin-bottom: 15px;
    padding-right: 35px;
  `,
  ControlBlockButton: styled.img`
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin-left: 0.7vw;
  `,
  
  TracksListBlock: styled.ul`
    box-sizing: border-box;
    max-height: calc(100vh - 55px);
    padding-top: 20px;
    padding-bottom: 25px;
  `,
  Track: {
    Wrapper: styled.li`
      background-color: ${props => props.chosen ?
      "rgba(255, 255, 255, 0.2)" : "inherit"};
      line-height: 35px;
      flex-direction: row;
      padding-right: 18px;
      cursor: pointer;
      &:hover {
          background-color: rgba(255, 255, 255, 0.2);
      }`,
      Field: styled.span`
        font-weight: ${ props => props.bold ?
        "bold" : "normal"};
        padding-left: 10px;
      `,
  },

};
