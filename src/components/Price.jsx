import React from 'react'
import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes'
import PriceCard from './PriceCard'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: fit-content;
    margin: 20px 0;
  }
`

const Price = () => {
  return (
    <Container id='pricing'>
      <PriceCard price="10" type="Basic" />
      <PriceCard price="20" type="Premium" />
      <PriceCard price="30" type="Advanced" />
      <AnimatedShapes />
    </Container>
  )
}

export default Price