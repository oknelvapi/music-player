import React, { Component } from 'react';
import musicData from './music-data.json';


import View from './play-list.view';
const { Player, ButtonsBlock, 
    PlayButtons, TrackNameBlock, 
    ControlBlock, ControlBlockButton, 
    TracksListBlock, Track } = View;

export default class PlayList extends Component {
     
    state = {
        indx: 0,
        visible: true,
        mixed: false,
        muted: false,
        volume: 100
    }

    render() {
        
        
        const elements = musicData.map((item) => {
            return (
                <Track.Wrapper key={item.id}
                    onClick = {() => void 0}>
                    <span>{item.id}</span>  
                    <Track.Author>{item.author}</Track.Author>
                    <span> - </span>
                    <span>{item.track}</span>
                </Track.Wrapper>  
            );
        });


        return (
            <Player>
                
                <ButtonsBlock>
                    <div>
                        <PlayButtons src="img/prev-song.svg" alt="back"/>
                    </div>
                    <div>
                        <PlayButtons src="img/play.svg" alt="play"/>
                    </div>
                    <div>
                        <PlayButtons src="img/next-song.svg" alt="next"/>
                    </div>  
                </ButtonsBlock>
                
                <TrackNameBlock>
                    <span>Sunny</span>
                    <span> - </span>
                    <span>Bensound</span>
                </TrackNameBlock>
                
                <ControlBlock>
                    <div>
                        <ControlBlockButton src="img/player-list-actived.svg" alt="playlist-on"/>
                    </div>
                    <div>
                        <ControlBlockButton src="img/player-mix.svg" alt="mixing"/>
                    </div>
                    <div>
                        <ControlBlockButton src="img/track-liked.svg" alt="like"/>
                    </div>
                    <div>
                        <ControlBlockButton src="img/volume.svg" alt="volume"/>
                    </div>
                    <div>
                        Volume
                    </div>
                    <div>
                        100%
                    </div>
                </ControlBlock>
                
                <TracksListBlock>
                    <ul>
                        <li>
                            { elements }
                        </li>
                    </ul>
                </TracksListBlock>

            </Player>
        );
    };
};