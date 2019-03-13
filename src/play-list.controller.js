import React, {Component} from 'react';
import View from './play-list.view';

const {
    Player, ButtonsBlock,
    PlayButtons, TrackNameBlock,
    ControlBlock, ControlBlockButton,
    TracksListBlock, Track
} = View;

export default class PlayList extends Component {

    state = {
        indx: 0,
        visible: true,
        mixed: false,
        muted: false,
        volume: 100
    }

    render() {
        return (
            <Player>

                <ButtonsBlock>
                    <PlayButtons src="img/prev-song.svg" alt="back"/>
                    <PlayButtons src="img/play.svg" alt="play"/>
                    <PlayButtons src="img/next-song.svg" alt="next"/>
                </ButtonsBlock>

                <TrackNameBlock>

                    {/*Поменять теги span на styled's*/}

                    <span>Sunny</span>
                    <span> - </span>
                    <span>Bensound</span>
                </TrackNameBlock>

                <ControlBlock>
                    <ControlBlockButton src="img/player-list-actived.svg" alt="playlist-on"/>
                    <ControlBlockButton src="img/player-mix.svg" alt="mixing"/>
                    <ControlBlockButton src="img/track-liked.svg" alt="like"/>
                    <ControlBlockButton src="img/volume.svg" alt="volume"/>
                    Volume
                    100%
                </ControlBlock>

                <TracksListBlock>
                    {this.props.musicData.map((item) => {
                        return (
                            <Track.Wrapper key={item.id} onClick={() => void 0}>

                                {/*Поменять теги span на styled's*/}

                                <span>{item.id}</span>
                                <Track.Author>{item.author}</Track.Author>
                                <span> - </span>
                                <span>{item.track}</span>
                            </Track.Wrapper>
                        );
                    })}
                </TracksListBlock>

            </Player>
        );
    };
};