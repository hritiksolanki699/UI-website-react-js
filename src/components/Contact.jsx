import React from 'react'
import styled from 'styled-components'
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'

const Container = styled.div`
    height: 90%;
    background: url('https://media.istockphoto.com/photos/dotted-grid-paper-background-texture-seamless-repeat-pattern-picture-id1320330053?b=1&k=20&m=1320330053&s=170667a&w=0&h=XisfN35UnuxAVP_sjq3ujbFDyWPurSfSTYd-Ll09Ncc=');
`
const Wrapper = styled.div`
 height: 100%;
 padding: 20px;
 display: flex;
 align-items: center;
 justify-content: center;
 @media only screen and (max-width: 480px) {
    flex-direction: column;
    
  }
`
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`
const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
  
`;

const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`
const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
    height: 50%;
  }
`
const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`

const TextArea = styled.textarea`
  width: 200px;
  height: 150px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`


const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`

const AddressItem = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 50px;
   @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`
const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
    width: 15px;
  }
`

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`

const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>
                        Questions? <br /> Let's Get In Touch
                    </Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder='Your Name' />
                            <Input placeholder='Your Email' />
                            <Input placeholder='Subject' />
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder='Your Message' />
                            <Button>Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                  <AddressItem>
                    <Icon src={Map} />
                    <Text>123 Park Avenue st., New York, USA</Text>
                  </AddressItem>
                  <AddressItem>
                    <Icon src={Phone} />
                    <Text>+91 7221 994 975</Text>
                    <Text>+91 8009 910 099</Text>
                  </AddressItem>
                  <AddressItem>
                    <Icon src={Send} />
                    <Text>hritiksolanki699@gmail.com</Text>
                    <Text>shivamsolanki699@gmail.com</Text>
                  </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact