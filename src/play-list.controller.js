import React, { Component } from 'react';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import './volume-range.css';

import View from './play-list.view';
const { Player, ButtonsBlock, 
    PlayButtons, TrackTitleBlock, 
    ControlBlock, ControlBlockButton,
    VolumeBlock, TracksListBlock, VolumeLvl,
    TrackTitle, Track, Like } = View;

export default class PlayList extends Component {
     
    state = {
        index: 0,
        play: false,
        visible: true,
        mixed: false,
        muted: false,
        value: 100,
    };
    
    // onChosen = (idx) => {
    //     console.log(`I've chosen the track №: ${this.props.musicData[idx].id}`)
        
    // }
    onTrackClick = (idx) => {
        this.play();
        this.setState({
                index: idx
            });
    };
    
    
    onPlay = () => {
        this.state.play ? 
        this.pause() :
        this.play()
    };
    play = () => {
        this.audio.play();
        this.setState({
            play: true
        });
    };
    pause = () => {
        this.audio.pause() ;
        this.setState({
            play: false
        });
    };


    onVolume = ( value ) => {
        this.audio.volume = value * 0.01
        this.setState( {
            value: value
        });
    };


    onPlayPrev = () => {
        const numbOfTracks = this.props.musicData.length;
        this.state.mixed ?
        this.RandomTrack()
        :
        this.setState( ({ index }) => {
            if (( index - 1) < 0 ) {
                return {
                    index: numbOfTracks-1
                };
            };
            return {
                index: index - 1
            };
        }) ;
    };
    onPlayNext = () => {
        const numbOfTracks = this.props.musicData.length; 
        this.state.mixed ?
        this.RandomTrack()
        :
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
    };
    RandomTrack = () => {
        const numbOfTracks = this.props.musicData.length; 
        this.setState(() =>{
            const nextRandomSong = Math.floor(Math.random() * Math.floor(numbOfTracks));
            return {
                index: nextRandomSong
            };
        }) 
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

    NextTrackPlay = () => {
        const numbOfTracks = this.props.musicData.length;
        this.state.mixed ?
        this.RandomTrack()
        :
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
                            src={ play ? "img/pause.svg" : "img/play.svg"} alt="play"/>
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
                                onChange={ this.onVolume } />
                        </VolumeBlock>
                        <audio
                            onEnded = { this.NextTrackPlay }
                            src={musicData[index].src}
                            type="audio/mp3" 
                            controls = {false}
                            autoPlay={play}
                            muted= {muted}
                            ref={(audio) => {
                                this.audio = audio
                            
                            }}>
                        </audio>
                        <VolumeLvl>{this.state.value}%</VolumeLvl>
                </ControlBlock>
                
                <TracksListBlock hide = { !this.state.visible }>
                    {musicData.map((item, idx) => {
                        return (
                                <Track.Wrapper 
                                    // Вивчити краще те, що нижче. 
                                    chosen = { this.state.index === idx }
                                    key={item.id} 
                                    // onClick = { () => his.onTrackClick(indx) } 
                                    onClick = { this.onTrackClick.bind(this, idx) }>
                                     {/* onClick = { () => {
                                         this.onTrackClick.bind(this, idx)();
                                         this.onChosen.bind(this, idx)();
                                     } }> */}
                                    <Track.Field>{ this.state.index === idx ? <img src="img/play.svg" alt="play"/> : item.id }</Track.Field>  
                                    <Track.Field bold>{item.author}</Track.Field>
                                    <Track.Field> - </Track.Field>
                                    <Track.Field>{item.track}</Track.Field> 
                                    <Track.Control>
                                        <Like src={ item.liked ? "img/track-liked.svg" : "img/track-not-liked.svg"} alt="like"/>
                                        <Track.Field>{Math.floor(item.duration/60)}-{item.duration % 60}</Track.Field>
                                        <img src="img/track-actions.svg" alt="action"/>
                                    </Track.Control>                           
                                </Track.Wrapper>  
                        );
                    })}
                </TracksListBlock>
            </Player>
        );
    };
};