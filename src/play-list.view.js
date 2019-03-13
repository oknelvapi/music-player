//import React, { Component } from 'react';
import styled from 'styled-components';

export default {
  Wrapper: styled.div`
   background-image: url(https://s.0332.ua/section/newsInternalIcon/upload/images/news/icon/000/044/666/monatik03_5b9cf91c40a23.jpg);
	background-size: cover;
  display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
  align-items: flex-end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
  width: 100vw;
  height: 100vh;
  `,

  Main: styled.main`
    background-color: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255);
    width: 45%;
    height: 73%; 
    display: flex;
        display: -webkit-flex;
    flex-flow: column nowrap;
        -webkit-flex-flow: column nowrap;
    align-items: center;
        -webkit-align-items: center;
  `,

  Header: styled.header`
  box-sizing: border-box;
    margin-top: 3%;
    margin-right: 18%;
    display: inline-block;  
    > button {
        background-color: transparent;
        background-repeat:no-repeat;
        border: none;
        color: white;
        cursor:pointer;
        font-size: 18px;
        overflow: hidden;
        outline:none;
    };
  `,

  Player: styled.div`
  box-sizing: border-box;
    display: flex;
        display: -webkit-flex;
    flex-flow: column nowrap;
    width: 100%
`,

  ButtonsBlock: styled.div`
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 7%;
    margin-top: 3%;
    > div {
        display: inline-block;
        margin: 1vh; 
    }
  `,
  PlayButtons: styled.img`
    cursor: pointer;
    width: 20px;
    height: 20px;
  `,

  TrackNameBlock: styled.div`
    font-size: 4vh;
    margin-left: 30%;
  `,

  ControlBlock: styled.div`
    display: flex;
    display: -webkit-flex;
    flex-wrap: nowrap;
    /* justify-content: flex-end; */
    align-items: center;
    margin-top: 8%;
    margin-left: 29%;
    & > div {
        margin-left: 0.7vw;
    };
  `,
  ControlBlockButton: styled.img`
    cursor: pointer;
    width: 20px;
    height: 20px;
  `,
  
  TracksListBlock: styled.div`
    margin-top: 6%;
  `,
  Track: {
    Wrapper: styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 11%;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }`,
    Author: styled.span`
      padding-left: 10px;    
    `,
  },

};
