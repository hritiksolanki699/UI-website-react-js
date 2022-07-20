import React from 'react'
import styled from 'styled-components'

const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: #4e6bff;
    opacity: 0.7;
    position: absolute;
    top: -60px;
    right: 1000px;
    z-index: -1;
    animation: square 25s linear alternate infinite;

      @keyframes square{
        to{
            transform: translate(100vw, 100vh);
        }
      }
`
const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ff97af;
    position: absolute;
    top: 200px;
    right: 700px;
    z-index: -1;
    animation: circle 25s linear alternate infinite;

      @keyframes circle{
        to{
            transform: translate(100vw, -100vh);
        }
      }
`
const Rectangel = styled.div`
    width: 50px;
    height: 100px;
    background-color: #669966;
    opacity: 0.5;
    position: absolute;
    top: 400px;
    right: 500px;
    z-index: -1;
    animation: rect 25s linear alternate infinite;

      @keyframes rect{
        to{
            transform: translate(100vw, -50vh);
        }
      }
`

function AnimatedForFeature() {
    return (
        <div>
            <Square />
            <Circle />
            <Rectangel />
        </div>
    )
}

export default AnimatedForFeature