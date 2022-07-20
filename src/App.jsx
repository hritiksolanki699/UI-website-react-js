import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 480px) {
    height: fit-content;
  }
 
`
const Shape = css`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1; 
`

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(60% 0, 55% 100%, 100% 100%, 100% 0);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0, 33% 100%, 0% 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 25% 0, 25% 100%, 0% 100%);
  background-color: #f88497;
`
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(25% 0, 100% 0, 100% 100%, 80% 100%);
  background-color: crimson;
`



const App = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
       <Service />
       <ServiceShape />
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </div>
  );
};

export default App;