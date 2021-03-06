import styled from 'styled-components';

export default {
  Wrapper: styled.div`
   background-image: url(https://i.pinimg.com/originals/81/23/90/8123906a54a506342afff166ae85dd23.jpg);
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
  margin-bottom: 20px;
  
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
  RadioContainer: styled.div`
    height: 164px;
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
    flex-wrap: nowrap;
    justify-content: flex-end;
    padding-right: 50px;
  `,
  PlayButtons: styled.img`
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: inline-block;
    padding: 0 4px;
  `,

  TrackTitleBlock: styled.div`
    margin: 10px auto 0;
  `,
  TrackTitle: styled.span`
    font-weight: ${ props => props.bold ?
    "bold" : "normal"};
    font-size: 24px;
  `,

  ControlBlock: styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin: 20px auto 70px;
  `,
  ControlBlockButton: styled.img`
    cursor: pointer;
    width: 18px;
    height: 20px;
    margin: 0 5px 0 10px;
  `,
  VolumeBlock: styled.div`
    width: 220px;
    margin: auto 20px;
  `,
  VolumeLvl: styled.span`
    font-size: 14px;
    width: 25px;
  `,
  
  TracksListBlock: styled.ul`
    box-sizing: border-box;
    max-height: calc(100vh - 55px);
    display: ${props => props.hide ?
      "none" : "initial"};
    /* transition: .5s ease-in-out */ 
  `,
  Track: {
    Wrapper: styled.li`
      background-color: ${props => props.chosen ?
      "rgba(255, 255, 255, 0.2)" : "initial"};
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
        padding-left: 5px;
        padding-right: 10px;
      `,
      Control: styled.div`
        /* display: inline-block; */
       float: right;
      `,
  },
  Like: styled.img`
    margin-right: 40px;
  `,
};
