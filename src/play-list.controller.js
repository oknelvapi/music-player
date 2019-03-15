import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import View from './play-list.view';
const { Player, ButtonsBlock, 
    PlayButtons, TrackTitleBlock, 
    ControlBlock, ControlBlockButton,
    VolumeBlock, 
    TracksListBlock, TrackTitle, Track } = View;

export default class PlayList extends Component {
     
    state = {
        index: 0,
        play: true,
        visible: true,
        mixed: false,
        muted: false,
        value: 50,
    };
    
    onChosen = (idx) => {
        console.log(`I've chosen the track №: ${this.props.musicData[idx].id}`)
        
    }
    onTrackClick = (idx) => {
        this.setState(() => {
            return {
                index: idx
            };
        });
    };
    
    
    onPlay = () => {
        this.state.play ? 
            this.audio.pause() :
            this.audio.play();
        this.setState( () => {
            return {
                play: !this.state.play
            };
        });
    };
    onPlayPrev = () => {
        const numbOfTracks = this.props.musicData.length; 
        this.setState( ({ index }) => {
            if (( index - 1) < 0 ) {
                debugger
                return {
                    index: numbOfTracks
                };
            };
            return {
                index: index - 1
            };
        });
    }

    onPlayNext = () => {
        const numbOfTracks = this.props.musicData.length; 
        this.setState( ({ index }) => {
            if ((index + 1) >= numbOfTracks ) {
                return {
                    index: 0
                };
            };
            return {
                index: index + 1
            };
        });
    }

    onVisible = () => {
        this.setState( () => {
            return {
                visible: !this.state.visible
            };
        });
    };
    onMix = () => {
        this.setState( () => {
            return {
                mixed: !this.state.mixed
            };
        });
    };
    onLike = () => {
        console.log("Like!")
    };
    onMute = () => {
        this.setState( () => {
            return {
                muted: !this.state.muted
            };
        });
    };

    render() {
      const { musicData } = this.props;
      const { index, play, visible, mixed, muted } = this.state;
        
      return (
            <Player>  
                <ButtonsBlock>
                        <PlayButtons 
                            onClick = { this.onPlayPrev }
                            src="img/prev-song.svg" alt="back"/>
                        <PlayButtons 
                            onClick = { this.onPlay }
                            src={ play ? "img/play.svg" : "img/pause.svg"} alt="play"/>
                        <PlayButtons 
                            onClick = { this.onPlayNext }
                            src="img/next-song.svg" alt="next"/> 
                </ButtonsBlock>
                
                <TrackTitleBlock>
                    <TrackTitle>{musicData[index].track}</TrackTitle>
                    <TrackTitle> - </TrackTitle>
                    <TrackTitle bold>{musicData[index].author}</TrackTitle>
                </TrackTitleBlock>
                
                <ControlBlock>
                        <ControlBlockButton 
                            onClick = { this.onVisible }
                            src={ visible ? "img/player-list-actived.svg" : "img/player-list.svg" } alt="playlist-on"/>
                        <ControlBlockButton 
                            onClick = { this.onMix }
                            src={ mixed ? "img/player-mix-actived.svg" : "img/player-mix.svg"} alt="mixing"/>
                        <ControlBlockButton 
                            onClick = { this.onLike }
                            src={ musicData[index].liked ? "img/track-liked.svg" : "img/track-not-liked.svg"} alt="like"/>
                        <ControlBlockButton 
                            onClick = { this.onMute}
                            src={ muted ? "img/mute.svg" : "img/volume.svg" } alt="volume" />
                        <VolumeBlock>
                            <InputRange
                                maxValue={100}
                                minValue={0}
                                value={this.state.value}
                                onChange={value => this.setState({ value })} />
                        </VolumeBlock>
                        <audio
                            src={musicData[index].src}
                            type="audio/mp3" 
                            controls = {false}
                            autoPlay
                            muted= {muted}
                            ref={(audio) => {
                                this.audio = audio
                            }}>
                        </audio>
                        <span>100%</span>
                </ControlBlock>
                
                <TracksListBlock>
                    {musicData.map((item, idx) => {
                        return (
                            <Track.Wrapper key={item.id} 
                                // onClick = { () => his.onTrackClick(indx) } 
                                // onClick = { this.onTrackClick.bind(this, idx) }
                                onClick = { () => {
                                    this.onTrackClick.bind(this, idx)();
                                    this.onChosen.bind(this, idx)();
                                } }>
                                <Track.Field>{item.id}</Track.Field>  
                                <Track.Field bold>{item.author}</Track.Field>
                                <Track.Field> - </Track.Field>
                                <Track.Field>{item.track}</Track.Field>
                            </Track.Wrapper>  
                        );
                    })}
                </TracksListBlock>
            </Player>
        );
    };
};