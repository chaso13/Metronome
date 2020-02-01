import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components'
import Circle from './Circle';
import Metronome,{Play} from './Metronome.js'
  
 class Blinker extends Component {
    
    render(){
    
    let isPlaying = playing ? 'running' : 'paused';
    
    const KeyFrame = keyframes`
        0%{
            transform: scale(1);
            opacity: 0;
        }
        25%{
            transform: scale(1.1);
            opacity: 0.25;
        }
        50%{
            transform: scale(1.2);
            opacity: 0.50;
        }
        75%{
            transform: scale(1.3);
            opacity: 0.75;
        }
        100%{
            transform: scale(1.4);
            opacity: 1;
        }

    `
     const Blinker = styled.div `
         animation: ${KeyFrame} 1s ease-in-out infinite;
         animation-play-state:${isPlaying};  
            
    `

    return(
        <Blinker><Circle/></Blinker>
    );
    }
 }

 export default Blinker