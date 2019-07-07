import React, { Component } from 'react';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './volume-range.css';

import View from './play-list.view';
const { VolumeBlock, VolumeLvl, 
        RadioContainer, PlayButtons,
        ControlBlockButton, ControlBlock } = View;

export default class Radio extends Component {
    state = {
        index: 0,
        play: false,
        muted: false,
        value: 100,
        liked: false
    };
    
    onVolume = ( value ) => {
        this.audio.volume = value * 0.01;
        this.setState( {
            value: value
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

        const { play, liked, muted } = this.state;

        return (
            <RadioContainer>
                <PlayButtons 
                        onClick = { this.onPlay }
                        src={ play ? "img/pause.svg" : "img/play.svg"} alt="play"/>
                <ControlBlock>
                    <ControlBlockButton 
                        onClick = { this.onLike }
                        src={ liked ? "img/track-liked.svg" : "img/track-not-liked.svg"} alt="like"/>
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
                        src="http://live.radioec.com.ua:8000/kiev"
                        type="audio/mp3"
                        autoPlay = { play }
                        controls = { false }
                        ref={(audio) => { this.audio = audio }}
                    />
                    <VolumeLvl>{this.state.value}%</VolumeLvl>
                </ControlBlock>
            </RadioContainer>
        );
    };
};